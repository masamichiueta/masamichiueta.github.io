---
layout: post
title: "brew upgradeで Your CLT does not support macOS 11というエラーがでた"
description: ""
date: 2021-02-17
categories: development
lang: ja_JP
tags:
- homebrew
- macOS Big Sur
---

macOSをBig Surに更新してから、homebrewの更新をするとエラーが発生したのでメモ。

```
$ brew update
$ brew upgrade
```

を実行すると、

```
Error: Your CLT does not support macOS 11
```

と表示されました。

以下を実行すれば、更新できるようになりました。

```
$ sudo rm -rf /Library/Developer/CommandLineTools
$ sudo xcode-select --install
```