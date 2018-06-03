---
layout: post
title: "XRPのウォレットの残高を確認するアプリを作りました"
description: "Ledger Nanoでリップルを保有している人が簡単に確認できるようにXRPのウォレットの残高を確認するアプリを作りました。Ledger Nanoで保有している人はいわゆるガチホの人が多いのかなと思っています。いちいちWebサイトでアドレス入力して確認するのも面倒だったので作ってしまいました。"
date: 2018-05-15
categories: cryptocurrency
hero-image: "cover.png"
lang: ja_JP
tags:
- 仮想通貨
- リップル
- XRP
- アプリ
- iOS
---

# XRPのウォレットの残高を確認するアプリ

Ledger Nanoでリップルを保有している人が簡単に確認できるようにXRPのウォレットの残高を確認するアプリを作りました。

<video width="320" controls>
  <source src="{{ site.url }}/assets/posts/2018-05-15/xrp.mov" type="video/mp4">
</video>

※ムービー中のアドレスは取引所のものです。

Ledger Nanoで保有している人はいわゆるガチホの人が多いのかなと思っています。いちいちWebサイトでアドレス入力して確認するのも面倒だったので作ってしまいました。

入力したアドレスはiPhoneのキーチェーンというセキュアな所に保存され、サーバーなどには保存されません。

使っているのは公式のリップルのAPI, BitbankのパブリックAPI、CoincheckのパブリックAPIです。

AppStoreでは公開していませんが、ソースはGitHubで公開していて、Xcodeを使っていて開発者ライセンスを持っている人であればiPhoneにインストールできます。

[GitHub XRP](https://github.com/micchyboy1023/XRP)