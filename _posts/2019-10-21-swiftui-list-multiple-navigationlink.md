---
layout: post
title:  "SwiftUIでListの中でNavigationLinkを複数使うとうまく動かない"
description: "SwiftUIでListの中でNavigationLinkを複数使うとうまく動かなかったのでメモです。"
date: 2019-10-21
categories: development
image: /assets/posts/2019-10-21/cover.png
lang: ja_JP
tags:
- SwiftUI
- List
- NavigationLink
---

SwiftUIでListの中でNavigationLinkを複数使うとうまく動かなかったのでメモです。

`UIKit`だと、`UITableView`を使って1つのセルの中で複数のタップエリアを作って別々の画面に遷移させたいことがあると思います。
`UITableViewCell`の`accessoryView`とかがまさにそんな感じの使い方かと思います。

`SwiftUI`でこれをしようとすると`UITableView`の代わりに`List`を使って、遷移は`NavigationLink`で行います。しかし、`List`の中に複数の`NavigationLink`をいれてしまうと、遷移の挙動がおかしくなります。


例えば以下のような`View`を作ると添付gifのような挙動になります。

{% highlight swift %}

struct ContentView: View {

    let data = [
        "Mavericks",
        "Yosemite",
        "El Capitan",
        "Sierra",
        "High Sierra",
        "Mojave",
        "Catalina"
    ]

    var body: some View {
        NavigationView {
            List(data, id: \.self) { data in
                VStack {
                    NavigationLink(destination: Text(data)) {
                        Text(data)
                    }
                    NavigationLink(destination: Text("Second navigation")) {
                        Text("additional navigation")
                    }
                }
            }
        }
    }
}

{% endhighlight %}

![NavigationLink List](/assets/posts/2019-10-21/navigationlink-bug.gif "NavigationLink List")

`NavigationLink`を2つ`VStack`で配置していても、タップエリアは全体で、遷移したあと戻ると自動で遷移されてしまいます。

この挙動を回避するには、今のところわたしが見つけた方法としては、`List`の代わりに`ScrollView`を使うということです。

`List`がデフォルトで提供してくれるスタイルは適用されなくなってしまいますが、`ScrollView`を使うと実現できます。


{% highlight swift %}

struct ContentView: View {

    let data = [
        "Mavericks",
        "Yosemite",
        "El Capitan",
        "Sierra",
        "High Sierra",
        "Mojave",
        "Catalina"
    ]

    var body: some View {
        NavigationView {
            ScrollView(.vertical, showsIndicators: true) {
                ForEach(data, id: \.self) { data in
                    VStack {
                        NavigationLink(destination: Text(data)) {
                            Text(data)
                        }
                        NavigationLink(destination: Text("Second navigation")) {
                            Text("additional navigation")
                        }
                        Divider()
                    }
                }
            }
        }
    }
}

{% endhighlight %}

![NavigationLink ScrollView](/assets/posts/2019-10-21/navigationlink-scrollview.gif "NavigationLink ScrollView")