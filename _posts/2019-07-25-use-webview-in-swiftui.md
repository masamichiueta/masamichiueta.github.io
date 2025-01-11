---
layout: post
title:  "SwiftUIでWebViewを使う"
description: "SwiftUIでWebViewを使ってみました。SwiftUI専用のWebViewはまだないようで、WebKitのWKWebViewや、SafariServiceのSFSafariViewControllerを使う必要があります。"
date: 2019-07-25
categories: engineering
hero-caption: <a href="https://developer.apple.com/xcode/swiftui/">Appleサイト</a>よりスクリーンショット
image: /assets/posts/2019-07-25/cover.png
lang: ja_JP
tags:
- SwiftUI
- WebView
---

SwiftUIでWebViewを使ってみました。
SwiftUI専用のWebViewはまだないようで、`WebKit`の`WKWebView`や、`SafariService`の`SFSafariViewController`を使う必要があります。

## WKWebView

`WKWebView`を使うには、まず`UIViewRepresentable`を使って`WKWebView`を表示する`View`を作成します。

{% highlight swift %}
import SwiftUI
import WebKit

struct WebView : UIViewRepresentable {
    var url: URL

    func makeUIView(context: Context) -> WKWebView  {
        return WKWebView(frame: .zero)
    }
    func updateUIView(_ uiView: WKWebView, context: Context) {
        let req = URLRequest(url: url)
        uiView.load(req)
    }
}

#if DEBUG
struct WebView_Previews: PreviewProvider {
    static var previews: some View {
        WebView(url: URL(string: "https://apple.com")!)
    }
}
#endif

{% endhighlight %}

この`WebView`を使うと、WebViewを表示することができます。

{% highlight swift %}
import SwiftUI

struct MyView : View {
    var url: URL
    var body: some View {
        WebView(url: url)
    }
}

#if DEBUG
struct MyView_Previews : PreviewProvider {
    static var previews: some View {
        MyView(url: URL(string: "https://apple.com")!)
    }
}
#endif
{% endhighlight %}


## SFSafariViewController

`SFSafariViewController`も`WKWebView`と同様に`UIViewControllerRepresentable`を使ってブリッジする必要があります。

{% highlight swift %}
import SwiftUI
import SafariService

struct SafariView: UIViewControllerRepresentable {
    var url: URL

    func makeUIViewController(context: UIViewControllerRepresentableContext<SafariView>) -> SFSafariViewController {
        return SFSafariViewController(url: url)
    }

    func updateUIViewController(_ uiViewController: SFSafariViewController, context: UIViewControllerRepresentableContext<SafariView>) { }
}

#if DEBUG
struct SafariView_Previews: PreviewProvider {
    static var previews: some View {
        SafariView(url: URL(string: "https://apple.com")!)
    }
}
#endif

{% endhighlight %}

今のところモーダルで表示する場合は問題無いようですが、プッシュで表示すると、ナビゲーションバーが2重で表示される問題があるようです。

[How do I use SFSafariViewController with SwiftUI?](https://stackoverflow.com/questions/56518029/how-do-i-use-sfsafariviewcontroller-with-swiftui)