---
layout: post
title:  "2019年にネイティブアプリを開発する方法"
description: "AppleがAppStoreを開始してから10年が経ちました。たくさんの人々がアプリを使っていますし、2019年もこのアプリプラットフォーム上で多くのイノヴェイションが生まれると思います。これまで様々なプラットフォームで色々なフレームワークを使ってアプリを開発してきました。今はSwiftでiOSアプリを開発していますが、過去にはWindowsアプリを開発していたり、ReactやVueといったフレームワークでWebアプリを開発したり、ReactNativeやFlutterでマルチプラットフォーム向けのネイティブアプリを開発したりしました。過去数年の間に、色々なツールが出てきては消えていきましたが、2019年にアプリを開発するとしたら以下の3つかなと思っています。"
date: 2019-01-05
categories: engineering
image: /assets/posts/2019-01-05/cover.jpg
hero-caption: Photo by <a href="https://unsplash.com/photos/A6JxK37IlPo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bagus Hernawan</a> on <a href="https://unsplash.com/search/photos/app?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
lang: ja_JP
tags:
- アプリ開発
- Swift
- React Native
- Flutter
---

[Mediumに書いた記事](https://medium.com/@masamichiueta/how-to-build-a-native-app-in-2019-b7f490a17846)の日本語版となります。

---
2020/01/01追記
2020はこちら　[2020年にネイティブアプリを開発する方法](https://masamichiueta.github.io/development/2020/01/01/build-a-native-app-in-2020.html)
---

AppleがAppStoreを開始してから10年が経ちました。たくさんの人々がアプリを使っていますし、2019年もこのアプリプラットフォーム上で多くのイノヴェイションが生まれると思います。

これまで様々なプラットフォームで色々なフレームワークを使ってアプリを開発してきました。今はSwiftでiOSアプリを開発していますが、過去にはWindowsアプリを開発していたり、ReactやVueといったフレームワークでWebアプリを開発したり、ReactNativeやFlutterでマルチプラットフォーム向けのネイティブアプリを開発したりしました。過去数年の間に、色々なツールが出てきては消えていきましたが、2019年にアプリを開発するとしたら以下の3つかなと思っています。

## 1. ネイティブ言語、ネイティブプラットフォーム

![Swift](/assets/posts/2019-01-05/swift.jpeg "Swift")

iOSだと、Swift(かObjective-C)、Xcode、UIKitです。

Androidだと、Kotlin(かJava)、AndroidStudio(か他のIDE)、Android SDKです。

2019年でもネイティブアプリを開発するにはこれが一番シンプルな手段だと思います。

ツールやSDKや開発言語は公式でサポートされていて、それぞれ統合されていますし、最新のAPIを使ったりするのももちろん簡単にできます。フレームワークのバージョンを管理する手間や、よくわからないエラーに悩まされることもありません。それにデバイスに最適化されたUXを開発することにフォーカスすることができます。

ただ、ずっと言われているように、iOS,Androidの両方のプラットフォームそれぞれにアプリを開発する必要があります。

## 2. React Native

![React](/assets/posts/2019-01-05/react.png "React")

React NativeはiOS, Androidのマルチプラットフォームに対してネイティブアプリを開発できるFacebook製のフレームワークです。

React NativeはReactと同じコーディングスタイルなので、JavaScriptやReactをよく知っているWeb開発者のかたは取り組みやすいと思います。Reactを知らない場合は、まずReactを学ぶ必要があります。

Reactで有名なアーキテクチャはReduxのようなFluxアーキテクチャで、スケーラブルなアーキテクチャでアプリを開発していきたい場合には、アーキテクチャやライブラリについても学ぶ必要があります。その分時間はかかります。

## 3. Flutter

![Flutter](/assets/posts/2019-01-05/flutter.png "Flutter")

FlutterはiOS, Androidのマルチプラットフォームに対してネイティブアプリを開発できるGoogle製のフレームワークです。ネイティブアプリだけでなくWebアプリも開発できるようです。

Flutterは2018年に多くの開発者に注目されたと思います。私も去年Flutterでアプリを開発しました。

FlutterのコーディングスタイルはReactに似ていて、コンポーネントベースのUI（Flutterではウィジェットと言います）、ホットリロード、マルチプラットフォームなどが特徴です。

が、Flutterのもっとも特徴的な点はDartを開発言語として採用している点だと思います。（Go言語ではなく

Flutterでアプリを開発するまではDartは書いたことがありませんでしたが、C#、Java、JavaScriptなどの経験があればDartを書くのは難しいことではないと思います。

Flutterはマテリアルデザインのスキャフフォールディング（テンプレート機能のようなもの）があるので、マテリアルデザインのアプリを作りやすくなっています。2019年新しいアプリを開発するならFlutterは考慮する価値があると思います。

---

以上、2019年にネイティブアプリを開発するオススメの方法を3つ紹介してみました。

私としては長期的な視点で開発する場合には、やはり **1. ネイティブ言語、ネイティブプラットフォーム**がいいかなと思います。React NativeやFlutterはプロトタイピングに向いていると思っています。というのも、すぐに綺麗なアプリを作ることはできますが、スケーラブルなアーキテクチャ設計にするのはなかなか難しいのではと思うのと、最新のAPIに追従していくのが難しいと思うからです。

ただ、開発者として開発していて楽しいものを選ぶことが大事だと思います。