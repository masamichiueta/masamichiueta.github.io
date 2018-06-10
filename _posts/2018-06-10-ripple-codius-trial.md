---
layout: post
title:  "スマートコントラクトプラットフォームCodiusでReactアプリを実行してみた"
description: "Codiusとは、Ripple Labsにより開発が始まり2015年6月に打ち切りとなっていた、Ripple(XRP)に対応したスマートコントラクト
らしいです。Codiusはオープンなホスティングプロトコルです。Coidusを使うと、ホスティング先の数に関わらずプログラムのホスティングが非常に簡単になります。"
date: 2018-06-10
hero-image: cover.png
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

# Codiusのセットアップ

Codiusはオープンソースで、開発者用ツールもすぐにインストールすることができます。

[codius](https://www.npmjs.com/package/codius)

`Codius`をインストールするには、以下の3つが必要です。

- NodeJS version8.9.4以上
- XRPウォレット
- Moneyd

Codiusを実行するには、先に`Moneyd`を実行する必要があるようです。

こちらの記事[Joining the Live ILP Network](https://medium.com/interledger-blog/joining-the-live-ilp-network-eab123a73665)を参考に`Moneyd`の実行していきます。

**Moneydをライブ環境で実行するにあたり、35XRP以上入ったウォレットが必要です。**

今回は開発用のテスト環境で行ってみます。

## Moneydの実行

以下のコマンドを実行します。

```
npm install -g moneyd moneyd-uplink-xrp
moneyd xrp:configure
moneyd xrp:start
```

xrp:configureの際にはXRPの秘密鍵を入力します。

これで、ILPネットワークに接続できました。

## Codiusの実行

### Manifestの作成

Codiusを実行するには、Manifestを作成する必要があるようです。今回は、CodisuのサンプルからReactアプリを動かすManifestを使ってみます。

[codius/examples](https://github.com/codius/examples)

```
{
  "manifest": {
    "name": "my-codius-create-react-app",
    "version": "1.0.0",
    "machine": "small",
    "port": "3000",
    "containers": [{
      "id": "app",
      "image": "androswong418/example-pod-1@sha256:8933bced1637e7d3b08c4aa50b96a45aef0b63f504f595bb890f57253af68b11"
    }]
  }
}
```

これを、`create-react-app-manifest.json`というファイルで保存します。
このDockerコンテナは、Facebookの`create-react-app`のイメージのようです。


### Manifestのアップロード

Manifestを作成したら、`codius`のコマンドを使用してManifestをアップロードします。

```
codius upload ./create-react-app-manifest.json --duration 200
```

アップロードが完了すると、以下のようなメッセージが表示されます。

```
Successfully Uploaded Pods to:
{ 
  url:  'http://hogehoge.local.codius.org:3000/',
 manifestHash: 'hogehoge',
  host: 'hogehoge',
  expiry: 'xxxx-xx-xxTxx:xx:xx.xxxZ',
  expirationDate: 'xx-xx-xxxx xx:xx:xx -0700',
  expires: 'in 2 minutes',
  pricePaid: 'xxx' 
}
```

`url`に表示されたURLにアクセスすると、Reactアプリが実行されています！

![React on Codius]({{ site.url }}/assets/posts/2018-06-10/cover.png "React on Codius")