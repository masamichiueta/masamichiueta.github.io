---
layout: post
title: "Embedded Frameworkを使ってiOSアプリを適当なレイヤーごとに分割する"
description: "開発しているiOSアプリのソースが割と増えてきたので、リファクタリングついでにEmbedded Frameworkd(Cocoa Touch Framework)に分割しました。"
date: 2018-05-06
categories: development
lang: ja_JP
tags:
- ios
- swift
- embedded framework
- xcode
- apple
---

*この投稿はQiitaに投稿したものと同じです。[Embedded Frameworkを使ってiOSアプリを適当なレイヤーごとに分割する](https://qiita.com/masamichiueta/items/db84ca3d0d23a37d8866)*

開発しているiOSアプリのソースが割と増えてきたので、リファクタリングついでにEmbedded Frameworkd(Cocoa Touch Framework)に分割しました。

分割した目的としては、

- レイヤー分割の明確化
- ビルド時間の短縮
- 依存関係の整理

の3点がメインです。

Embedded Framework(Cocoa Touch Framework)の導入方法や説明はこちらの記事が参考になります。

[Embedded Framework使いこなし術](https://qiita.com/mono0926/items/e29cd17789fd1d1548aa)

## ビフォーアフター

### ビフォー

分割前は、アプリ用のターゲットが1つあり、そのフォルダ以下にグループを作ってソースファイルを分割していました。

![groups]({{ site.url }}/assets/posts/2018-05-06/1.png "groups")
![targets]({{ site.url }}/assets/posts/2018-05-06/2.png "targets")

### アフター

分割後は、以下の4つのフレームワークを追加して、それぞれのフレームワークにソースを振り分けて行きました。

- アプリ
    - iOSアプリ
- API
    - APIとのやりとりを担当する。Modelに依存。
- Common
    - Foundation系のExtensionやロガーのように全体で使うような汎用機能。
- Model
    - CoreDataのエンティティや、データモデルのクラス・構造体。
- Storage
    - CoreDataやKeychain, iCloudへデータを保存する。Model, APIに依存。


![embedded frameworks]({{ site.url }}/assets/posts/2018-05-06/3.png "embedded frameworks")
![targets]({{ site.url }}/assets/posts/2018-05-06/4.png "targets")


## 分割時のポイント

### フレームワークごとの依存関係を考える

当たり前ですが、フレームワークに分割することで、フレームワーク同士の依存関係が明確になるので、相互依存などならないように、どこにどのソース・クラスを入れて行くかというのを考えました。

色々と試行錯誤した結果、上記4つのフレームワークに分割して、依存関係を整理しました。

### アクセス修飾子をつける

全てのソースを1つのターゲット対象にしていた時は、アクセス修飾子を特につけずに全てデフォルトの`internal`にしていたのですが、フレームワークに分割すると`public`にしないと参照先のターゲットからは参照できないので、アクセス修飾子も整理しました。

フレームワークを参照しているのに、クラスがないというようなエラーが出たりして、一瞬理由がわからなくなったことがあったのですが、アクセス修飾子が原因でした。


### フレームワークごとにフラグを追加する

デバッグフラグや独自の開発環境用フラグを利用して、実行時の挙動やテスト環境用ビルドなどを行っていますが、こちらもフレームワークごとに追加する必要があります。

フレームワークのターゲットを選択し、`Build Settings`の`Other Swift Flags`から追加します。

![Build Setting Other Swift Flags]({{ site.url }}/assets/posts/2018-05-06/5.png "Build Setting Other Swift Flags")

### CoreDataの初期化処理を変更する

CoreData周りの初期化処理には、`NSPersistentContainer`を使用していますが、モデル定義ファイル `.xcdatamodeld`は、上記フレームワークのうち`Model`の中に入れました。

そのため、`NSPersistentContainer`を初期化する際には、`Model`の中の定義ファイルを明示的に指定する必要があります。

{% highlight swift %}

let modelURL = Bundle(for: Modelの中のクラス.self).url(forResource: "定義ファイル名", withExtension: "momd")!
let mom = NSManagedObjectModel(contentsOf: modelURL)!
let container = NSPersistentContainer(name: "コンテナ名", managedObjectModel: mom)
        
{% endhighlight %}

この辺は、`Bundle.main`を使ってリソースを読み込んでいた部分でも注意する必要があると思います。


## 分割した感想

ビルド時間が早くなったかというと、早くなった気もします。まだそこまで大きくもないので、もっと大規模になるともっと実感できそうです。

レイヤー分割が明確になり、テストしやすくなったり、役割が明確になったり、依存関係がはっきりしたりという点がよかったと感じています。

