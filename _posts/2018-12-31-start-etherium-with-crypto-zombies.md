---
layout: post
title:  "CryptoZombiesというサービスでイーサリアムを使ったdApps開発を勉強し始めました"
description: "そろそろdApps開発についても勉強しないといけないなと思いながらなかなかできていなかったのですが、年末で時間が取れたので CryptoZombiesというサービスでイーサリアムを使ったdApps開発について勉強しています。"
date: 2018-12-31
categories: development
image: /assets/posts/2018-12-31/cover.png
hero-caption: <a href="https://cryptozombies.io">CryptoZombies</a>よりスクリーンショット
lang: ja_JP
tags:
- イーサリアム
- CryptoZombies
- Etherium
- dApps
- SmartContract
---

そろそろdApps開発についても勉強しないといけないなと思いながらなかなかできていなかったのですが、年末で時間が取れたので `CryptoZombies` というサービスでイーサリアムを使ったdApps開発について勉強しています。

`CryptoZombies` はdApps開発が学べるWebサービスで、CryptoZombiesというdAppsを題材にしながら実際にコードを書いてdApps開発を学ぶことができます。

[https://cryptozombies.io](https://cryptozombies.io)

現在は3つのコースが用意されており、その中でも `Solidity` というイーサリアム上でスマートコントラクトを実装できるプログラミング言語のコースを実施してみました。

現在はレッスン6まで公開されていて、スマートコントラクトの開発部分と、実際にそれをフロントからJavaScriptで呼び出す部分を学ぶことができます。

## 学べたこと

1. プログラミング言語 `Solidity` の基本
2. dApps開発の流れ
3. フロントとの連携方法

### 1. プログラミング言語 Solidity の基本

`CryptoZombies` では `Solidity` の基本的な部分から説明してくれているので、言語自体を学習しながら進めていくことができました。`Solidity` 自体は難しくないと思いました、少なくとも他の言語の経験があればすぐに理解できます。

`Solidity` のページの記述にもあるように、静的型付け言語で、コントラクト指向プログラミング言語です。他の言語と違うのはこのコントラクトという部分だと思います。いわゆる他の言語での`class`にあたるものが`contract`になっています。

あとは、`struct`や`function`などなどお馴染みの機能もあれば、`modifier`や`require`構文など割と独特なものも紹介されています。

### 2. dApps開発の流れ

dApps開発と言っても最初は何を指すのかあまりわかっていませんでしたが、イーサリアムを用いたdApps開発ではこの `Solidity` で書かれた各種コントラクトをコンパイルして、イーサリアム上にデプロイすることでそのコントラクトを利用できるようになります。そしてそれをWebアプリやスマホアプリなどクライアントから呼び出すことでアプリを開発していきます。

`CryptZombies` では2018年12月31日時点では、コントラクトをコンパイルしてイーサリアムにデプロイする部分のチュートリアルはありませんが、もうすぐ追加されるようです。

[INFURA](https://infura.io) というサービスが紹介されていて、このサービスを使うとイーサリアムのノードを立てることなくコントラクトをデプロイできるようです。

### 3. フロントとの連携方法

`CryptoZombies` では `JavaScript` から実装したコントラクトを呼び出す方法が説明されています。web3.jsというイーサリアムのJavaScriptライブラリを使用することで、実装したコントラクトを簡単に呼び出すことができます。

このAPIを使って普通にWebアプリを作ると、dAppsとしてWebアプリを開発できるというわけですね。


CryptoZombiesをやっていて面白かったのが、ゾンビに食べさせる餌として、同じくイーサリアムのコントラクト上で開発されているCryptoKittiesのネコを与えることができるとうい点でした。

つまり同じブロックチェーン上にあるデータなので、公開されているAPIを使えば違うゲーム同士でもデータをやりとりできるということですね。

まだまだ理解が浅いのでこれからも研究していこうと思います。

`CryptoZombies`をひたすら進めていく動画をアップしたのでよければみてみてください。

[CryptoZombies at Youtube](https://www.youtube.com/playlist?list=PLCwKASeEZrUvXfSoOTE5eud4F7oBYX0H7)