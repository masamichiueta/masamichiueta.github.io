---
layout: post
title: "BitMEX ビットコインFXの自動取引Botのサンプルを動かしてみました"
description: "最近流行りのビットコインFXボットでも作ってみようかと調べていたところ、BitMEXのボットのサンプルコード sample-market-makerがあったので、動かしてみました。"
date: 2018-05-08
categories: cryptocurrency
hero-image: "cover.png"
hero-caption: <a href="https://www.bitmex.com">BitMEX Webサイト</a>よりスクリーンショット
lang: ja_JP
tags: 
- 仮想通貨
- bitmex
- ビットコイン
- bitcoin
- bot
- ボット
---

# BitMEX ビットコインFXの自動取引Botのサンプル

最近流行りのビットコインFXボットでも作ってみようかと調べていたところ、BitMEXのボットのサンプルコード **sample-market-maker** があったので、動かしてみました。

Webページからリンクされていて、GitHubのリポジトリも公式のものでした。

[https://github.com/BitMEX/sample-market-maker](https://github.com/BitMEX/sample-market-maker)

pythonの知識があり、README.mdのGetting Startedを読めば、動かせるかと思います。

## Getting Started

### Testnet BitMEXにアカウントを作る

どうやらBitMEXのテスト環境があるようで、ますそちらにアカウントを作成します。

[Testnet BitMEX Account](https://testnet.bitmex.com/app)

その後、テスト環境で使うビットコインもどき`TBTC`をウォレットに送信します。

[deposit some TBTC](https://testnet.bitmex.com/app/deposit)

どうやら送り放題のようですね！


### 環境構築

私はpythonのバージョン管理に、[pyenv](https://github.com/pyenv/pyenv)と[pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)を使っています。

bitmex-market-makerは、python3.5以降をサポートしているようなので、pyenvで3.6.5をインストールします。

```
pyenv install 3.6.5
````

その後、pyenv-virtualenvで、bitmex-market-maker用の環境を作ります。

```
pyenv virtualenv 3.6.5 bitmex
```

bitmex-market-maker用のディレクトリを作って、pipでbitmex-market-makerをインストールします。

```
mkdir bitmex
cd bitmex
pyenv local bitmex
pip install bitmex-market-maker
```

その後、market-makerをセットアップします。

```
marketmaker setup
```

すると、`market_maker`フォルダと、`settings.py`が生成されます。


## とりあえず実行して見る

API KeyとSecret Keyを生成します。

![API Key and Secret Key]({{ site.url }}/assets/posts/2018-05-08/key.png "API Key and Secret Key")

キーを生成したら、settings.pyのAPI_KEYとAPI_SECRETにコピーします。
そして、ボットを実行します。

```
marketmaker XBTUSD
```

ボットを実行するとデフォルトの設定にしたがって、オーダーが自動的に実行されていきます。

BitMEXの仕様や画面に慣れていないので、いまいちわからないことが多いですが、とりあえずBotを実行することはできました。

実際に本番環境でもそのうちやってみたいので、設定のチューニングや結果などはこれから試してみようと思います。

ちなみに、10分ほど放置していると、-50%とかになっていました笑


## 終了する

Botを終了するには, crtl + Cを押します。
終了すると、オーダーが全てキャンセルされました。

ポジションは残ったままだったので、本番環境で実際にやる場合は注意が必要です。
