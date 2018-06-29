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

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ARKit2ではマップのrelocalizationが追加されて、worldmapの保存、共有が可能に。これは便利だ</p>&mdash; Masamichi Ueta (@masamichiueta) <a href="https://twitter.com/masamichiueta/status/1006324724211728385?ref_src=twsrc%5Etfw">2018年6月11日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ARKit2、ローカルでワールドマップのファイルシェアできるのか。単にファイルをAppGroupでシェアしてる感じかな</p>&mdash; Masamichi Ueta (@masamichiueta) <a href="https://twitter.com/masamichiueta/status/1006326931149631488?ref_src=twsrc%5Etfw">2018年6月12日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">Environment Texturingで反射のような環境情報を反映可能に</p>&mdash; Masamichi Ueta (@masamichiueta) <a href="https://twitter.com/masamichiueta/status/1006329003722993665?ref_src=twsrc%5Etfw">2018年6月12日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ARKit2には画像追跡機能も追加。APIも使いやすそう</p>&mdash; Masamichi Ueta (@masamichiueta) <a href="https://twitter.com/masamichiueta/status/1006428141441568769?ref_src=twsrc%5Etfw">2018年6月12日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">FaceTrackingも強化。視線の追跡が可能に。舌の検出も可能。</p>&mdash; Masamichi Ueta (@masamichiueta) <a href="https://twitter.com/masamichiueta/status/1006439704978313217?ref_src=twsrc%5Etfw">2018年6月12日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


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