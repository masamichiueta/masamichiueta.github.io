---
layout: post
title:  "スマートコントラクトプラットフォームCodiusでReactアプリを実行してみた"
description: ""
date: 2018-06-09
categories: cryptocurrency
lang: ja_JP
tags:
- Codius
- Ripple
- XRP
- React
---

元ネタはこちら
[Running a simple React app on the Codius smart contract platform](https://medium.com/codius/running-a-simple-react-app-on-the-codius-smart-contract-platform-7ddefce8cb06)

# Codiusとは

Codiusとは、

> Ripple Labsにより開発が始まり2015年6月に打ち切りとなっていた、Ripple(XRP)に対応したスマートコントラクト
らしいです。

[Ripple Labsによって開発されたスマートコントラクトのプロトコル Codiusが復活](https://crypto-times.jp/xrp_smartcontract_revive/)から引用。

公式サイトでは、以下のように書かれています。

> Codius is an open hosting protocol. It makes it very easy to upload a program, whether you want it to run on one host or thousands.


> Codiusはオープンなホスティングプロトコルです。Coidusを使うと、ホスティング先の数に関わらずプログラムのホスティングが非常に簡単になります。

つまり、中央集権的に1つのサーバーでプログラムをホスティングするのではなく、非中央集権的にあらゆる環境でホスティングできますよということですね。

# ツールのインストール

Codiusはオープンソースで、開発者用ツールもすぐにインストールすることができます。

[codius](https://www.npmjs.com/package/codius)


