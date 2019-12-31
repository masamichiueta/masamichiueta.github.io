---
layout: post
title:  "2020年にネイティブアプリを開発する方法"
description: "去年2019年にネイティブアプリを開発する方法という記事を書きました。その中では1. ネイティブ言語、ネイティブプラットフォーム, 2. React Native, 3. Flutterの3つの方法を紹介していました。2020年はどういう感じになりそうか、という実感を書いておきたいと思います。"
date: 2020-01-01
categories: development
image: /assets/posts/2020-01-01/cover.jpg
hero-caption: Photo by <a href="https://unsplash.com/@joelfilip?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joel Filipe</a> on <a href="https://unsplash.com/s/photos/building?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
lang: ja_JP
tags:
- アプリ開発
- Swift UI
- Flutter
- Swift
- Dart
---

去年[2019年にネイティブアプリを開発する方法](https://masamichi.me/development/2019/01/05/build-a-native-app-in-2019.html)という記事を書きました。

その中では

1. ネイティブ言語、ネイティブプラットフォーム
2. React Native
3. Flutter

の3つの方法を紹介していました。

2020年はどういう感じになりそうか、という実感を書いておきたいと思います。私はAndroidの開発方法については詳しくないので触れません。

選択肢としては、

1. Flutter
2. ネイティブ言語、新しいフレームワーク(Swift/SwiftUI)
3. ネイティブ言語、従来のフレームワーク(Swift/UIKit)

という感じかなと思っています。

ちなみにGoogleトレンドで、Flutter, React Native, SwiftUIを比較してみるとこんな感じです。
![Compare](/assets/posts/2020-01-01/compare.png "Compare")

期間は2018年1月1日から2019年12月31日です。2019年9月~10月ごろにFlutterがReact Nativeを超えてきているような感じでしょうか。SwiftUIはWWDC直後は増えているもののここ最近は横ばいのようです。

## 1. Flutter

![Flutter](/assets/posts/2020-01-01/flutter.png "Flutter")

FlutterはiOS, Android, Web, Desktopのクロスプラットフォームな環境に対してネイティブアプリを開発できるGoogle製のフレームワークです。プログラミング言語はDartを採用しています。

Flutterは2019年とても勢いがあったように感じました。2019年QiitaのアドベントカレンダーでもFlutterが購読数1位だったようです。

[Qiitaのモバイルのカレンダーランキング](https://qiita.com/advent-calendar/2019/ranking/subscriptions/categories/mobile)

Flutterでは、WidgetとDartのStreamを組み合わせるBLoC(Business Logic Components)パターンというアーキテクチャが主流のようです。

このビデオがわかりやすかったです。

**Google IOのビデオ　Build reactive mobile apps with Flutter (Google I/O '18)**

<iframe class="w-100" height="315" src="https://www.youtube.com/embed/RS36gBEp8OI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

こちらの記事も
[Getting Started with the BLoC Pattern](https://www.raywenderlich.com/4074597-getting-started-with-the-bloc-pattern)

これまでのクロスプラットフォームアプリ開発のフレームワークとは違った盛り上がりを見せているな、と言う印象のFlutterですが、2020年どうなるか注目です。

開発したアプリではBLoCパターンは使っていなかったので今後このパターンを使いつつ、個人でもFlutterでアプリ開発をしていきたいと思います。


## 2. ネイティブ言語、新しいフレームワーク(Swift/SwiftUI)

![SwiftUI](/assets/posts/2020-01-01/swiftui.png "SwiftUI")
<small>[Appleのサイト](https://developer.apple.com/xcode/swiftui/)からスクリーンショット</small>

WWDC2019で突然発表されたUIフレームワークがSwiftUIです。

ついに公式で宣言的シンタックスがサポートされました。

ReactやFlutterと同様、コンポーネントを組み合わせてViewを作っていく方式で、Stateの管理などもSwiftUIとCombineフレームワークでうまくできるようになっています。

個人的にリファレンスになるリポジトリはこちらのMovieSwiftUIです。

[MovieSwiftUI](https://github.com/Dimillian/MovieSwiftUI)

2019年にSwiftUIでアプリを1つ開発しましたが、コンポーネント指向でかけるところはいいものの、想定外の動きをする場合があったりして、もっとチップスが色々共有されてくるといいですね。

2020年、大規模で複雑なアプリをSwiftUIで作るのはまだ難しい部分もあるかもしれませんが、先取りで挑戦していく価値はあると思います。小規模なアプリならお試しで使ってみるのもいいと思います。

もっとSwiftUIネイティブのコンポーネントが増えてくると便利になってくるでしょう。
とはいえ、Twitter上ではiPodをSwiftUIでiOS上に再現された方もいて、うまく作ればかなり高機能なアプリも開発できます。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Turned my iPhone into an iPod Classic with Click Wheel and Cover Flow with <a href="https://twitter.com/hashtag/SwiftUI?src=hash&amp;ref_src=twsrc%5Etfw">#SwiftUI</a> <a href="https://t.co/zVk5YJj0rh">pic.twitter.com/zVk5YJj0rh</a></p>&mdash; Elvin (@elvin_not_11) <a href="https://twitter.com/elvin_not_11/status/1199717678908366854?ref_src=twsrc%5Etfw">November 27, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## 3. ネイティブ言語、従来のフレームワーク(Swift/UIKit)

![Swift](/assets/posts/2019-01-05/swift.jpeg "Swift")

2020年でもネイティブアプリを開発するにはこれが一番シンプルな手段だと思います。

SwiftUIが発表されたものの、既存のアプリはまだほとんどUIKitベースでしょうし、UIKitでできていたことがSwiftUIだとなかなかできない、といったこともまだあるかなと思います。

既存のアプリがあったり、大規模になりそうなアプリを開発していくならUIKitにしておく方が安全かもしれません。とはいえ長期的に考えるとSwiftUIに移行していくと思うので、部分的にSwiftUIを導入するとか、SwiftUIに移行しやすい形でUIKitで開発する、という方法がバランス的に良さそうです。

---

以上、2020年にネイティブアプリを開発するオススメの方法を3つ紹介してみました。

新しい開発方法は色々と出てくるものの、開発者として開発していて楽しいものを選ぶことが大事だと思います。

もちろん食わず嫌いはよくないので、どのフレームワークも学んで試した上で、最近の潮流も含めどれが自分に合うかを見極めていけばいいと思います。