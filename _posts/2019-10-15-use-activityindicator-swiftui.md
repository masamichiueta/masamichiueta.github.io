---
layout: post
title:  "SwiftUIでActivityIndicatorを使う方法"
description: "SwiftUIでActivityIndicatorを使う方法を紹介します。"
date: 2019-10-15
categories: development
image: /assets/posts/2019-10-15/cover.png
lang: ja_JP
tags:
- SwiftUI
- ActivityIndicator
---

SwiftUIでActivityIndicatorを使う方法を紹介します。

SwiftUI製のActivityIndicatorは今のところないので、`UIKit`の`UIActivityIndicator`を使う必要があります。

`UIKit`のViewをSwiftUIで使用するには、`UIViewRepresentable`を使用します。

{% highlight swift %}

import SwiftUI
import UIKit

struct ActivityIndicator: UIViewRepresentable {
    typealias UIViewType = UIActivityIndicatorView

    @Binding var isAnimating: Bool
    let style: UIActivityIndicatorView.Style

    func makeUIView(context: UIViewRepresentableContext<ActivityIndicator>) -> ActivityIndicator.UIViewType {
        UIActivityIndicatorView(style: style)
    }

    func updateUIView(_ uiView: UIActivityIndicatorView, context: UIViewRepresentableContext<ActivityIndicator>) {
        isAnimating ? uiView.startAnimating() : uiView.stopAnimating()
    }
}

{% endhighlight %}

これでSwiftUIのViewからActivityIndicatorを使うことができるようになります。

{% highlight swift %}

struct MyView: View {
    @State var isLoading: Bool = false

    var body: some View {
        VStack {
            ActivityIndicator(isAnimating: $isLoading, style: .medium)
        }
    }
}

{% endhighlight %}