---
layout: post
title:  "FirebaseとReactで認証付きアプリのサンプルを実行するまで"
description: ""
date: 2018-06-18
hero-image: cover.png
image: /assets/posts/2018-06-18/cover.png
categories: development
lang: ja_JP
tags:
- Firebase
- React
- JavaScript
---

現在FirebaseでWebアプリを作っています。アプリを作る上でユーザー認証は欠かせないものの、作るのが大変ということが多いですが、Firebaseを使うと簡単に実装することができました。

私はWebアプリを作る上でReactを使うことが多いので、今回はFirebaseとReactでユーザー認証を行うサンプルアプリを実行して、Firebaseでホスティングしてみました。

今回参考にしたサンプルはこちらです。

[rwieruch/react-firebase-authentication](https://github.com/rwieruch/react-firebase-authentication)

# Firebaseにプロジェクトを登録する

まずは[Firebaseのコンソール](https://console.firebase.google.com/)から、プロジェクトを登録します。

![プロジェクト登録]({{ site.url }}/assets/posts/2018-06-18/addproject.png "プロジェクト登録")

## アプリを設定する

プロジェクトを登録したらログインの設定を行います。

サイドメニューの`Authentication`から、メールアドレスによるログインを有効にします。

![メールアドレスログイン]({{ site.url }}/assets/posts/2018-06-18/login.png "メールアドレスログイン")

<br />

![メールアドレスログイン]({{ site.url }}/assets/posts/2018-06-18/loginbymail.png "メールアドレスログイン")

## Firebaseコマンドラインツールのインストール

Firebaseにアプリをデプロイするには、Firebaseコマンドラインツールをインストールする必要があります。

npmパッケージで提供されているので、npmでインストールします。

```
npm intall -g firebase-tools
```

その後ターミナルから以下のコマンドを実行します。

```
firebase login

cd /path/to/project/directory // プロジェクトディレクトリに移動

firebase init
```

`firebase init`を実行すると、使用する機能やプロジェクトを聞かれるので該当するものを選択します。

![firebaseの機能]({{ site.url }}/assets/posts/2018-06-18/functions.png "firebaseの機能")

この場合は、`Firestore`,`Hosting`,`Storage`を有効にしてみました。

また途中で、` What do you want to use as your public directory?`と聞かれるので、Reactアプリに合わせるために`build`に変更してください。

プロジェクトを作成した後も、`firebase.json`を修正すれば変更可能です。

`init`が終了したら、試しに`deploy`してみます。

```
firebase deploy
```

これでデフォルトのページがデプロイされました。


# サンプルアプリを実行する

認証用のサンプルアプリをダウンロードします。

[rwieruch/react-firebase-authentication](https://github.com/rwieruch/react-firebase-authentication)

ダウンロードしたら、
```
package.json
public
src
```

をコピーします。

![プロジェクト]({{ site.url }}/assets/posts/2018-06-18/project.png "プロジェクト")

その後npmパッケージをインストールします。

```
npm install
```

インストール後は、`src/firebase/firebase.js`の中の`config`を自分のプロジェクトのものに変更します。
`prod`と`dev`が定義されていますが、一旦同じものを入れました。

configは、Firebaseのコンソールのトップ、`ウェブアプリにFirebaseを追加`から表示することができます。

![ウェブアプリにFirebaseを追加]({{ site.url }}/assets/posts/2018-06-18/addfirebase.png "ウェブアプリにFirebaseを追加")

設定を書き換えたら、アプリをビルドしてfirebaseにデプロイします。

```
npm run build
firebase deploy
```

以上で、サンプルアプリがFirebaseにデプロイされました。

デプロイ後以下のようなページが表示されていれば成功です。

![サンプル]({{ site.url }}/assets/posts/2018-06-18/sample.png "サンプル")

サインアップページからユーザー登録をすると、Firebaseのユーザーが追加されます。