---
layout: post
title:  "XRPペーパーウォレットの作り方"
description: "XRPのウォレットを作る方法を紹介します。今回作成するのは、ペーパーウォレットです。ペーパーウォレットとは、ウォレットのアドレスと秘密鍵を紙に印刷して保管するウォレットです。"
date: 2018-06-11
hero-image: cover.png
image: /assets/posts/2018-06-11/cover.png
categories: cryptocurrency
lang: ja_JP
tags:
- XRP
- Ripple
- リップル
- ウォレット
- ペーパーウォレット
---

# XRPウォレットの作り方

XRPのウォレットを作る方法を紹介します。

今回作成するのは、ペーパーウォレットです。

ペーパーウォレットとは、ウォレットのアドレスと秘密鍵を紙に印刷して保管するウォレットです。

紙ではなくて、例えば秘密鍵をUSBファイルに保存して、インターネットに接続されていない安全な場所に保管しておいても大丈夫でしょう。

では早速作成していきましょう。

# ツールをダウンロードする

今回は、Octillionという会社が提供している、`generate-ripple-wallet`というツールを使います。

[generate-ripple-wallet](https://github.com/OctillionSA/generate-ripple-wallet)

上のページにアクセスして、ファイルをダウンロードします。

![Download]({{ site.url }}/assets/posts/2018-06-11/download.png "Download")

ファイルをダウンロードしなくても、Web上に提供されているアプリを使用すればウォレットを生成できるのですが、インターネットに繋がれたところで生成するのもセキュリティ的に微妙なので、オフラインで作成するためにダウンロードします。

# ツールを開く

ダウンロードしたら、zipを回答して、`index.html`を開きます。

![html]({{ site.url }}/assets/posts/2018-06-11/html.png "html")

`index.html`を開くと、以下のような画面が表示されるので、右下の`Generate`ボタンを押します。

![generate-ripple-wallet]({{ site.url }}/assets/posts/2018-06-11/generate-ripple-wallet.png "generate-ripple-wallet")

すると、Ripple addressにウォレットのアドレスが、Ripple secretに秘密鍵が表示されます。

ここで生成された秘密鍵は、紙に書いて安全な場所に保管するか、USBメモリにテキストファイルとして保存して安全な場所に保管してください。


# ウォレットのアクティベーション

以上でウォレットは作成できましたが、XRPのウォレットを使えるようにするには、**ウォレットに20XRP以上を送金してウォレットをアクティベートする必要があります**。

20XRPはウォレットを使うための手数料のようなもので、ウォレットに送られた20XRPは、送金することはできません。

生成したアドレスに20XRP以上を送金してウォレットの生成は完了となります。

簡単ですね！