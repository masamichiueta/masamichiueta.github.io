---
layout: post
title:  "SwiftUIでURLから画像を取得して表示する方法"
description: "SwiftUIでURLから画像を取得して表示する方法を紹介します。"
date: 2019-10-12
categories: development
image: /assets/posts/2019-07-25/cover.png
hero-caption: <a href="https://developer.apple.com/xcode/swiftui/">Appleサイト</a>よりスクリーンショット
lang: ja_JP
tags:
- SwiftUI
- 画像
---

SwiftUIでURLから画像を取得して表示する方法を紹介します。

指定されたURLから画像をダウンロードする `ImageLoader` と、その画像を表示する `URLImage` を作成すると表示することができます。

まず画像をダウンロードする `ImageLoader` です。

{% highlight swift %}

class ImageLoader: ObservableObject {
    let objectWillChange = ObservableObjectPublisher()

    var image: Image? {
        willSet {
            objectWillChange.send()
        }
    }

    func load(url: String) {
        guard let url = URL(string: url) else { return }
        URLSession.shared.dataTask(with: url) { data, response, error in
            guard let data = data, let image = UIImage(data: data) else { return }
            DispatchQueue.main.async {
                self.image = Image(uiImage: image)
            }
        }.resume()
    }
}


{% endhighlight %}

`ObservableObject`にして、`image`の変更を監視できるようにします。`load`関数で指定されたURLから画像をダウンロードして`Image`をセットします。

次に画像を表示するView `URLImage` です。

{% highlight swift %}
struct URLImage<Content>: View where Content: View {
    @ObservedObject var imageLoader = ImageLoader()

    private let url: String
    private let content: (_ image: Image) -> Content

    init(url: String, content: @escaping (_ image: Image) -> Content) {
        self.url = url
        self.content = content
    }

    var body: some View {
        ZStack {
            if imageLoader.image != nil {
                content(imageLoader.image!)
            } else {
                content(Image("placeholder"))
            }
        }.onAppear {
            self.imageLoader.load(url: self.url)
        }
    }
}

struct URLImage_Previews: PreviewProvider {
    static var previews: some View {
        URLImage(url: "") {
            $0
        }
    }
}
{% endhighlight %}

urlを受け取り`onAppear`で`ImageLoader`の`load`を呼び出します。ここではダウンロードする前で`image`が`nil`の時は`placeholder`画像を表示するようにしています。

また`content`を受け取ることで、`URLImage`を呼び出した側から画像のスタイルを変更できるようにできます。

`URLImage`の使い方です。例えば、画像を丸い円でクリップして影をつけてみます。

{% highlight swift %}

URLImage(url: url) {
    $0.renderingMode(.original)
        .resizable()
        .scaledToFit()
        .clipShape(Circle())
        .frame(width: 50.0, height: 50.0)
        .overlay(Circle().stroke(Color.white,lineWidth:4).shadow(radius: 10))
}

{% endhighlight %}

![画像](/assets/posts/2019-10-12/image.png "画像")

より使いやすいAPIを提供してくれているOSSもすでにGitHubに公開されています。

[dmytro-anokhin/url-image](https://github.com/dmytro-anokhin/url-image)