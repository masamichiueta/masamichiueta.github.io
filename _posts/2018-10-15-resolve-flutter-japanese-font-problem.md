---
layout: post
title:  "FlutterでiOS12のデバイスにアプリをインストールすると日本語が明朝体になる"
description: "FlutterでiOS12のデバイスにアプリをインストールすると日本語が明朝体になる"
date: 2018-10-15
categories: engineering
lang: ja_JP
tags:
- Flutter
- iOS
---

FlutterでiOS12のデバイスにアプリをインストールすると日本語が明朝体になってしまいます。

Flutterのバージョンは、`Channel beta, v0.9.4` です。


![Flutterの日本語が明朝体になる](/assets/posts/2018-10-15/mincho.png "Flutterの日本語が明朝体になる")

Flutterの修正でそのうち直ると思います([Japanese default font family is incorrect on iOS 12](https://github.com/flutter/flutter/issues/21667))が、テーマにヒラギノフォントを指定することで、修正することができます。

<script src="https://gist.github.com/masamichiueta/a2906d96e568031d8b455575e324b1dc.js"></script>

![Flutterでヒラギノを使う](/assets/posts/2018-10-15/hiragino.png "Flutterでヒラギノを使う")