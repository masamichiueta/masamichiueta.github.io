---
layout: post
title: "ffmpegを使ってmovファイルをgifに変換する"
description: "アプリの開発で、スクリーンを動画でキャプチャしてgifにして貼り付けるということをよく行うと思いますが、ffmpegを使用すると簡単にmovをgifに変更できました。"
date: 2018-06-06
categories: engineering
lang: ja_JP
tags:
- ffmpeg
- mov
- gif
---

# movをgifに変換する

アプリの開発で、スクリーンを動画でキャプチャしてgifにして貼り付けるということをよく行うと思いますが、`ffmpeg`を使用すると簡単にmovをgifに変更できました。

まずffmpegをインストールします

```
brew install ffmpeg
```

インストールするとffmpegが使用できるようになるので、

```
ffmpeg -i [input file].mov -r [frame rate] [output file].gif
```

例えば、

```
ffmpeg -i screen.mov -r 24 screen.gif
```

のようにうつと、ffmpegがmovをgifに変換してくれます。

ffmpegの使い方はこちらのページが参考になります。

[ffmpegの最も基本的な使い方](http://tech.ckme.co.jp/ffmpeg_basic.shtml)