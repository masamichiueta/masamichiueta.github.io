---
layout: post
title: "Bootstrap5.3で追加されたダークモードに対応してみました"
description: ""
date: 2023-01-15
categories: development
lang: ja_JP
tags:
- Bootstrap
- DarkMode
---

Bootstrap5.3がリリースされており（現段階ではまだalphaバージョン？）、ダークモードが追加されたようです。

[Color modes](https://getbootstrap.com/docs/5.3/customize/color-modes/)

このブログでもBootstrapを長らく使っていて、時々バージョンを上げていましたが、ダークモード対応したいなと思っていたのでアップデートしました。
基本的にはバージョンを上げるだけで大丈夫で、Bootstrapの記事に記載されているJavaScriptを導入するとユーザーの環境設定に応じてColor modeが設定されるようです。

[Color modes - JavaScript](https://getbootstrap.com/docs/5.3/customize/color-modes/#javascript)

ダークモード対応に伴い、色をcssで指定していた部分を少し対応しました。
- `text-dark` を指定していたところを、`text-body`に変更
- badgeのスタイルの更新
- syntacs highlightingに関して、[highlight.js](https://highlightjs.org) を導入、スタイルは `a11y-dark`のテーマを追加ました。

ようやくダークモードに対応できて、もう少しブログも更新していこうと思います。