---
layout: post
title:  "What's new in ARKit 2 ~ ARKit2の新機能"
description: ""
date: 2018-06-13
categories: development
lang: ja_JP
tags:
- ARKit
- AR
- Apple
- WWDC
---

WWDC2018で発表されたARKit2に関するセッションのビデオ [What’s New in ARKit 2](https://developer.apple.com/videos/play/wwdc2018/602/)のメモです。


# ARKit2の新機能

ざっくり書くと以下の点が新機能として紹介されていました。

- ワールドマップの共有が可能になった
- 画像のトラッキングが可能になった
- オブジェクトのテクスチャへの環境情報の反映（Environment Texturing、反射など）が可能になった
- リアルな物体の認識、スキャンが可能に
- フェイストラッキングの向上、視線追跡、舌の認識が可能になった

キーノートやセッションビデオで紹介されていますが、一番大きな点としては、**複数人でワールドマップの共有が可能になった**ことかと思います。

これによって、複数のデバイスで同じ位置にあるオブジェクトを見ることができるようになったり、キーノートの発表でもあった`SwiftShot`のように複数人で遊べるARアプリを簡単に作れるようになりました。

Environment Texturingも、`ARWorldTrackingConfiguration`の`environmentTexturing`を`.automatic`にするだけで良いので非常に簡単に適用できて素晴らしいと思います。

{% highlight swift %}
// Environment Texturing
// Create world tracking configuration
let configuration = ARWorldTrackingConfiguration()

// Enable automatic environment texturing 
configuration.environmentTexturing = .automatic

// Run the configuration
session.run(configuration)
 
{% endhighlight %}

正式リリースされたら、アプリを作ってみる予定です。

[SwiftShot](https://developer.apple.com/documentation/arkit/swiftshot_creating_a_game_for_augmented_reality)についてもソースを読んでみます。