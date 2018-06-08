---
layout: post
title:  "Swift4.2ではEnumを一覧で取得できるようになった"
description: "WWDC2018のWhat's new in SwiftでSwift4.2のアップデートが発表されていました。Swift4.2では、CaseIterableプロトコルをEnumに指定することで、allCasesというプロパティが使用できるようになり、Enumの一覧を取得できるようになったようです。"
date: 2018-06-08
categories: development
hero-image: cover.png
hero-caption: 画像出典:<a href="https://developer.apple.com/videos/play/wwdc2018/401/">Apple</a>
lang: ja_JP
tags:
- Swift
- Enum
- iOS
---

# Swift4.2ではEnumを一覧で取得できるようになった

WWDC2018の[What's new in Swift](https://developer.apple.com/videos/play/wwdc2018/401/)でSwift4.2のアップデートが発表されていました。

Swift4.2では、`CaseIterable` プロトコルをEnumに指定することで、`allCases`というプロパティが使用できるようになり、Enumの一覧を取得できるようになったようです。

Swift Evolutionはこちら

[Derived Collection of Enum Cases](https://github.com/apple/swift-evolution/blob/master/proposals/0194-derived-collection-of-enum-cases.md)


Enumの一覧をループで回すのは、結構やりたい時があって、ビデオのようにEnumの全ケースを入れたArrayを定義するということをやることがありましたが、これは便利ですね。

例
{% highlight swift %}
enum Gait: CaseIterable {
    case walk
    case trot
    case canter
    case gallop
    case jog
}

for gait in Gait.allCases {
    print(gait)
}
{% endhighlight %}