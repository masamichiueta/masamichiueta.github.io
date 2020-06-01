---
layout: post
title:  "GitHub Pagesで無料ブログを作成する - Part4 自分のオリジナルのテーマを作る"
description: "Jekyllでは既存のテーマを使うこともできるのですが、さらに一歩踏み込んで、自分で既存のテーマをカスタマイズしたり、テーマを作ることもできます。"
date: 2020-05-31
categories: development
image: /assets/posts/2020-05-31/cover.jpg
hero-caption: Photo by <a href="https://unsplash.com/@jessbailey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jess Bailey</a> on <a href="https://unsplash.com/s/photos/blog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
lang: ja_JP
tags:
- GitHub Pages
- ブログ
---

「GitHub Pagesで無料ブログを作成すr - Part4 自分のオリジナルのテーマを作る」です。

他の記事はこちら

- [Part1 GitHubにリポジトリを作ってサイトを公開する](https://masamichi.me/development/2020/05/24/github-pages-blog-part1-repository.html)
- [Part2 Jekyllを使ってみる](https://masamichi.me/development/2020/05/26/github-pages-blog-part2-jekyll.html)
- [Part3 Jekyllの設定をカスタマイズする](https://masamichi.me/development/2020/05/28/github-pages-blog-part3-cutomize-setting.html)
- [Part4 自分のオリジナルのテーマを作る](https://masamichi.me/development/2020/05/31/github-pages-blog-part4-original-theme.html)

## Jekyllのテーマのカスタマイズする

[前回の記事](https://masamichi.me/development/2020/05/28/github-pages-blog-part3-cutomize-setting.html)ではJekyllの設定をカスタマイズする方法を紹介しました。

カスタマイズするとはいえ、既存のテーマを使っていました。

Jekyllでは既存のテーマを使うこともできるのですが、さらに一歩踏み込んで、自分で既存のテーマをカスタマイズしたり、テーマを作ることもできます。

まずは、既存のテーマをカスタマイズする方法について紹介します。

## 既存のテーマをカスタマイズする

Jekyllでは`_config.yml`で設定しているテーマを使いつつ、自分で少しカスタマイズすることができます。
カスタマイズ方法はテーマによったりもするのですが、例えばデフォルトのテーマ`minima`では、[GitHubのリポジトリ](https://github.com/jekyll/minima)にカスタマイズ方法が記載されています。

Jekyllはディレクトリの構造が決められているので、そのルールにしたがって定義されているファイルを上書きすることで、カスタマイズすることができます。

例えば、ヘッダー部分をカスタマイズしたい場合は、自分のリポジトリに`_includes`フォルダを作成して、`header.html`を作成します。ゼロから作るのは難しいと思うので、`minima`のデフォルトの`header.html`をコピーした上でカスタマイズしていくと良いと思います。

Jekyllでは[Liquid](https://shopify.github.io/liquid/)というテンプレートを処理するための言語が使用されています。Liquidを使うことでテンプレートの中でif文によって分岐やループ処理を書くことができます。

[Jekyllでは様々な変数が定義されている](https://jekyllrb.com/docs/variables/)ので、それらを使ってテンプレートを書いていくことでレイアウトやページを作成していきます。

レイアウトをカスタマイズする場合は、`_layouts`フォルダを作りカスタマイズしたいレイアウトのhtmlファイルと同じファイル名でhtmlを作成し中身を上書きします。

こちらも0から作るのは大変なので、既存のレイアウトをコピーしてからカスタマイズしていくといいと思います。


`minima`ではcssをカスタマイズすることも可能です。`assets/css/style.scss`というファイルを作成します。拡張子からもわかるようにJekyllはsassをサポートしており、sassで記述していくことが可能です。

またファイルの先頭には以下を記述する必要があります。

```
---
---

@import "minima/skins/{{ site.minima.skin | default: 'classic' }}";
@import "minima/initialize";
```

このように既存のテーマをカスタマイズしていく場合は、基本的にはテーマで定義されているファイルを上書きして自分のファイルを作成する、という手順になります。

## 自分のテーマを作る

Jekyllでは既存のテーマをカスタマイズするだけでなく、自分のテーマを作ることもできます。

これまではGemで公開されているテーマを使ってきましたが、Jekyllのディレクトリ構造にしたがって、必要なファイルを作成すれば自分のオリジナルのページを作ることができます。Wordpressでテーマを作るのに似ています。

Jekyllのディレクトリやテンプレート言語のLiquidの使い方については[Jekyllの公式サイト](https://jekyllrb.com/docs/structure/)に書かれています。テンプレートの作り方全てを紹介するのは難しいのですが、基本的にはレイアウトに使われるhtmlやヘッダー・フッターなどの共通のhtmlなどを作成していくような形になります。

既存のテーマをカスタマイズする場合は、上書きしない部分を変更する必要はありませんでしたが、自分でテーマを作る場合は全て作る必要があります。しかしかなり柔軟にレイアウトを作成することができるので、まずはテーマを使ってみて、不満な部分があれば自分でテーマを作ってみるのをお勧めします。

ちなみに、このブログは自分でレイアウトを作成しています。


## まとめ

Part1からPart4で、GitHub Pagesで無料ブログを作成する方法を詳しく説明してみました。形さえ出来あがればあとはMarkdownで記事を書いていくだけで、とても使いやすいのでGitHub Pagesを使ったサイト作りはお勧めです。

Jekyllでサイト自体は生成できるので、静的サイトをホスティングできるところであればGitHub Pagesではなくても同じサイトを構築することができる点もメリットですね。もしファイルサイズはアクセス数に引っかかってしまった場合も、例えばAWSのS3のような場所に引越ししやすいのではないかと思います。