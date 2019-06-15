---
layout: post
title:  "macOS 10.15 Catalinaのベータバージョンを安全にインストールする方法"
description: "WWDC2019でmacOS 10.15 Catalinaが発表され、Apple Beta Software Programに参加している場合はベータバージョンのCatalinaをインストールすることができます。"
date: 2019-06-10
categories: development
image: /assets/posts/2019-06-10/cover.jpg
lang: ja_JP
tags:
- macOS
- Catalina
- APFS
---

WWDC2019でmacOS 10.15 Catalinaが発表され、Apple Beta Software Programに参加している場合はベータバージョンのCatalinaをインストールすることができます。

あくまでベータバージョンですので、メインで使用しているmacにインストールしてしまうと、普段使っているアプリが動かなくなってしまう場合もあります。

Apple公式に、ベータバージョンを安全にインストールする手順が記載されていました。

[個別の APFS ボリュームに macOS をインストールする](https://support.apple.com/ja-jp/HT208891)

ディスクユーティリティから、新しいAPFSボリュームを追加して、そこにインストールすることで現在使っているmacOSを失うことなく、使用できます。

ボリュームを追加した後、Appleの[ダウンロードサイト](https://developer.apple.com/download/)から新しいOSのプロファイルをインストールして、macOS10.15 Catalinaをダウンロードします。

![Download Catalina](/assets/posts/2019-06-10/download.png "Download Catalina")

ダウンロードするとインストーラが立ち上がるので、インストール先を先ほど作成した方のAPFSボリュームに指定します。

![Catalina1](/assets/posts/2019-06-10/catalina1.png "Catalina1")
![Catalina2](/assets/posts/2019-06-10/catalina2.png "Catalina2")

あとはインストールされるのを待つだけです。

起動ディスクを変更するにはシステム環境設定のスタートアップディスクから変更することができます。