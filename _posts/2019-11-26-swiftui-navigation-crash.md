---
layout: post
title:  "SwiftUIでNavigationLinkがクラッシュする - Tried to pop to a view controller that doesn't exist"
description: "SwiftUIで、公式チュートリアルで紹介されているPageViewの中にNavigationLinkを入れて、プッシュ遷移した後に戻るボタンでポップすると、Tried to pop to a view controller that doesn't exist というエラーが発生してクラッシュしてしまいました。"
date: 2019-11-26
categories: engineering
lang: ja_JP
tags:
- SwiftUI
- NavigationLink
- PageView
---

SwiftUIで、公式チュートリアルで紹介されている`PageView`の中に`NavigationLink`を入れて、プッシュ遷移した後に戻るボタンでポップすると、`Tried to pop to a view controller that doesn't exist` というエラーが発生してクラッシュしてしまいました。

環境はXcode11.2.1でiOS13.2.2のシミュレータで実行しています。

`UINavigationController`が元の`ViewController`にポップできていないようです。

`PageView`が毎回新しい`ViewController`を生成するのが原因でしょうか。

ググってみると同じようなエラーにぶつかっている人もいるみたいです。Xcode11.0では動いていたので、iOSのバグ、という可能性もあります。

[SwiftUI - NavigationLink inside NavigationBarItems, returns error on navigating from detail back to master view](https://forums.developer.apple.com/thread/124757)

TabViewが原因で発生する場合もあるようですが、私は`PageView`が原因でした。

[Tried to pop to a view controller that doesn't exist in SwiftUI](https://stackoverflow.com/questions/58737567/tried-to-pop-to-a-view-controller-that-doesnt-exist-in-swiftui)

解決方法はまだ見つかっていませんが、見つかったら紹介します。