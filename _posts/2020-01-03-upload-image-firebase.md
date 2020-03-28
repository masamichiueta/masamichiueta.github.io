---
layout: post
title:  "FirebaseでCloud Storageに画像をアップロードする"
description: "今FirebaseとReactでアプリを開発中で、画像をアップロードする部分を作ったのでメモ。"
date: 2020-01-03
categories: development
image: /assets/posts/2020-01-03/cover.png
lang: ja_JP
tags:
- Firebase
- Cloud Storage
---

今FirebaseとReactでアプリを開発中で、画像をアップロードする部分を作ったのでメモ。

アップロード部分

{% highlight JavaScript %}

// uploadPhotoという名前でexport

export const uploadPhoto = async (file) => {
  const storageRef = firebase.storage.ref();
  const uuid = generateUUID(); // UUIDを作っていますがなんでもOK
  const metadata = {
    contentType: 'image/png'
  };
  const fileRef = storageRef.child(`${uuid}.png`);
  await fileRef.put(file, metadata);
  return uuid; // UUIDを返していますが返さなくてもOK
}

{% endhighlight %}

使う部分

{% highlight JavaScript %}

class SampleUploader extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      photoData: null,
      isPosting: false,
    };
  }

  render() {
    // Preview
    const photo = this.state.photoData === null ? null :
      (
        <img src={this.state.photoData} />
      );

    return (
      <form onSubmit={async (e) => {
        e.preventDefault();
        this.setState({
          isPosting: true
        });
        const photoId = await storage.uploadPhoto(this.fileInput.current.files[0]);
        // use photoId

        this.setState({
          isPosting: false,
          photoData: null
        })
      }}>
        <input type="file" accept="image/*" ref={this.fileInput} onChange={(e) => {
          const files = e.target.files
          if (files.length > 0) {
            var file = files[0]
            var reader = new FileReader();
            reader.onload = (e) => {
              this.setState({ photoData: e.target.result });
            };
            reader.readAsDataURL(file);
          } else {
            this.setState({ photoData: null });
          }
        }} />
        {photo}
        <button type="submit" disabled={this.state.isPosting}>投稿する</button>
      </form>
    );
  }
}

{% endhighlight %}

無事FirebaseのCloud Storageに画像をアップロードすることができました。