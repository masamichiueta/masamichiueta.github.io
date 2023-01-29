---
layout: post
title: "SwiftUIでTabBarを非表示にする"
description: ""
date: 2023-01-31
categories: development
lang: ja_JP
tags:
- SwiftUI
- TabBar
---

SwiftUIでタブを表示するために使う [TabView](https://developer.apple.com/documentation/swiftui/tabview) ですがiOS16でプッシュ遷移をした時にTabBarを非表示にする手段が公式で追加されました。

UIKitでは表示される`UIViewController`で[hidesBottomBarWhenPushed](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621863-hidesbottombarwhenpushed)をtrueにすればプッシュ遷移でTabBarを非表示にすることができましたが、iOS16までSwiftUIでは同様のことができませんでした。

TabBarを非表示にしたい画面で、 [.toolbar(.hidden, for: .tabBar)](https://developer.apple.com/documentation/swiftui/presentedwindowcontent/toolbar(_:for:))を使えば非表示にすることができます。

サンプルコード

```
import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            NavigationStack {
                NavigationLink("Sun") {
                    Text("Hello Sun")
                        .toolbar(.hidden, for: .tabBar)
                }
                .navigationTitle(Text("Sun"))
            }
            .tabItem {
                Label("Sun", systemImage: "sun.max")
            }
            NavigationStack {
                NavigationLink("Moon") {
                    Text("Hello Moon")
                }
                .navigationTitle(Text("Moon"))
            }
            .tabItem {
                Label("Moon", systemImage: "moon.stars")
            }
        }
    }
}
```

![Hide TabBar](/assets/posts/2023-01-31/tabbar.mov "Hide TabBar")

Sunはプッシュ遷移をした時にTabBarが非表示になるのですが、Moonはそのまま表示されます。
TabBarを非表示にした後、ポップすると少しTabBarを表示するのに遅延があるところあたり、もう少し改善の余地がありそうです。

また残念ながらこのAPIはiOS16以降でしか使えず、iOS15以前で対応するにはUIKitベースのAPIを使うしかなさそうです。

ちなみに、[WWDC2022のExplore navigation design for iOSというセッション](https://developer.apple.com/videos/play/wwdc2022/10001/)で説明されていますが、Appleの公式見解としてはTabBarを非表示にするのは非推奨なので、ナビゲーションのベストプラクティスについてはまたまとめたいと思います。