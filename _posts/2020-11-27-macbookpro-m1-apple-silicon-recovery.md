---
layout: post
title: "Apple Silicon搭載のMacBook Pro M1が危うく文鎮化するところだったので記録"
description: "Apple Silicon搭載のMacBook Pro 13インチを仕事用に購入したのですが、クリーンインストールしたところ文鎮化しかけたので記録しておきます。"
date: 2020-11-27
categories: development
image: /assets/posts/2020-11-27/cover.jpeg
lang: ja_JP
tags:
- MacBook Pro
- Apple
- Apple Silicon
- M1
---

Apple Silicon搭載のMacBook Pro 13インチを仕事用に購入したのですが、クリーンインストールしたところ文鎮化しかけたので記録しておきます。

## Apple Silicon M1搭載 MacBook Pro 13インチの購入

11月に発表されてから割とすぐに注文したのですが、受け取ったのが11月26日でした。夜にセットアップを開始しはじめました。

<blockquote class="twitter-tweet"><p lang="und" dir="ltr">💻 <a href="https://twitter.com/hashtag/MacBookProM1?src=hash&amp;ref_src=twsrc%5Etfw">#MacBookProM1</a> <a href="https://t.co/w4LNZrpFba">pic.twitter.com/w4LNZrpFba</a></p>&mdash; Masamichi Ueta (@masamichiueta) <a href="https://twitter.com/masamichiueta/status/1331595674735968257?ref_src=twsrc%5Etfw">November 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## セットアップしているとカーネルパニックが発生するようになった

初期設定後、Xcode, Karabiner-Elements, VS Codeなど、いつも使っているアプリをもろもろインストールしていきました。

あとは、マイナンバーカード読み取り用に、NFCカードリーダーのドライバをインストールしたんですが、うまく動きませんでした。

その後、Macを再起動しようとすると、シャットダウンの途中で画面がおかしくなって、うまくシャットダウンできなくなってしまいました。起動後にカーネルパニックのアラートが表示されるようになり、焦りました。

今思うとこの時点でエラーメッセージをぐぐっておけば原因が特定できたのですが、NFCカードリーダーが動かなかったので、そのドライバが悪かったかなーと思い、設定したてでカーネルパニックになるのも気持ち悪かったので、一度BigSurクリーンインストールすることにしました。


ちなみに、原因はいつもお世話になっているKarabiner-Elementsだったようで、他にも同じ現象になる方がいるみたいです。

- [Karabiner Elements causes Apple silicon MacBook Air to crash during system shutdown #2517](https://github.com/pqrs-org/Karabiner-Elements/issues/2517)

コメントをみるにBigSur側の問題のようですが、アンインストールするとシャットダウンできるようになりました。

## クリーンインストールに失敗する

クリーンインストール作業を始めて、BigSurのインストール画面まで進んだのですが、エラーが表示されてインストールに失敗して進めなくなりました。いわゆる文鎮化。

「アップデートの準備中にエラーが起きました。 Failed to personalize the software update. Please try again.」

![BigSurのクリーンインストール失敗](/assets/posts/2020-11-27/bigsur-fail-install.jpeg "BigSurのクリーンインストール失敗")

AppleがBigSurのクリーンインストールの際に文鎮化したMacの解決方法を公開していたので、公開されている方法を試していきました。

- [If you get a personalization error when reinstalling macOS on your Mac with Apple M1 chip](https://support.apple.com/en-us/HT211983)

## なんとか復活

結果的に、上の記事で紹介されている全ての方法を試したのですが、唯一成功したのが、Apple Configuratorでファームウェアを復活させる方法でした。

- [Revive or restore a Mac with Apple silicon with Apple Configurator 2](https://support.apple.com/guide/apple-configurator-2/revive-or-restore-a-mac-with-apple-silicon-apdd5f3c75ad/mac)

それ以外にユーティリティ画面で対応する方法が3つほど紹介されていますが、どの方法でも最終的にBigSurのインストール画面で同じエラーが発生しました。

Apple Configuratorによる修復は最後に試したのですが、こちらはなんとかうまくいき、無事M1 MacBookProを復活させることができました。

実はこちらの方法の途中にも一度エラーがでて、諦めかけましたが、Apple  Configuratorを再起動してもう一度実行すると無事修復できました。

![Apple Configuratorのエラー](/assets/posts/2020-11-27/appleconfiguratorerror.jpg "Apple Configuratorのエラー")

最後は交換を覚悟したのですが、なんとか無事復活することができてよかったです。かなり焦りました。。。

同じ状態の方がいれば、参考にしてもらえるといいかと思います。

