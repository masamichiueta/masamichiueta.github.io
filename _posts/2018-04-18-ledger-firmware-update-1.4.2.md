---
layout: post
title: "Ledger Nano Sのファームウェア1.4.2へアップグレードする方法"
description: "Ledger Nano Sのファームウェア1.4.2へアップグレードする方法"
date: 2018-04-18
categories: cryptocurrency
lang: ja_JP
tags:
- ledger nano s
- ファームウェア
- ripple
---

# Ledger Nano S ファームウェア1.4.2

Ledger Nano Sのファームウェア1.4.2が公開されたようです。

インストール方法は公式ページを読めばわかります。

[https://support.ledgerwallet.com/hc/en-us/articles/360002731113](https://support.ledgerwallet.com/hc/en-us/articles/360002731113)

英語だとわからない方のために、日本語で簡単に書いておきます。


## 1. 現在のファームウェアのバージョンを確認する

- Ledger Nano Sを接続して、Settings > Device > Firmwareからファームウェアのバージョンを確認します。バージョンが1.3より小さい場合は、24個のリカバリーフレーズが必要になります。

## 2. Ledger Managerを起動する

- Ledger Managerを起動して、Ledger Nano Sを接続し、PINコードを入力します。

## 3. アプリをアンインストールする

- Ledger Managerでアプリケーションをアンインストールします。

## 4. ファームウェアをダウンロードして、インストールする

- Ledger Managerのサイドバーの`FIRMWARES`を選択します。
- 1.4.2が表示されるので、インストールボタンを押します。
- Ledger Nano Sに`Allow Ledger manager?`が表示されるので、右のボタンを押します。
- インストールが開始されます。

## 5.ファームウェアアップデートを実行する
- Ledger Nano Sに`Update Firmware`の文字と、ファームウェアのバージョン、identifierが表示されるので、確認します。
- 右ボタンを押して、アップデートを実行します。
- ファームウェアのバージョンが1.3.1以下の場合、#6を、1.4.1以上の場合、#7を実行します。

## 6. Ledger Nano Sを再起動する
- Ledger Nano SをUSBから抜いて、左ボタンを押しながら挿し直します。
- BootLoaderが表示されます。
- アップデートが終わるまで待ちます。

## 7. MCUバージョン、ファームウェアバージョンを確認します
- Settings > Device > Firmware から、MCUのバージョン、ファームウェアのバージョンを確認します。
- MCUが1.5, ファームウェアが1.4.2になっていればオッケーです。

## 8. アプリを再インストールする
- 3でアンインストールしたアプリを再度インストールします。


以上で終了です。
ファームウェアアップデートはセキュリティに関わるので、ぜひ早めにアップデートしましょう。


