---
layout: post
title:  "GitHub Pagesでブログを運用し始めてから4年くらいたった"
description: "このサイトはGitHub Pagesで運用しています。運用を開始してから4年くらいたったので、GitHub Pages運用のTipsでも書いておこうかと思います。"
date: 2019-12-14
categories: development
image: /assets/posts/2019-12-14/cover.png
hero-caption: <a href="https://pages.github.com">GitHubサイト</a>よりスクリーンショット
lang: ja_JP
tags:
- GitHub Pages
- ブログ
- 無料
---

このサイトはGitHub Pagesで運用しています。

運用を開始してから4年くらいたったのでGitHub Pages運用のTipsでも書いておこうかと思います。

## GitHub Pageのいいところ

GitHub Pagesのいいところは、なんといっても無料で使えるところとサーバーを管理する必要がないところです。GitHubのリポジトリにコンテンツを置いておけばサイトを作ることができます。

また、`username.github.io`というドメインだけでなく、自分で取得したカスタムドメインが使えたりSSL(https)にも無料で対応できる、という点も本当に素晴らしいなと思います。


## Jekyllとテンプレート
GitHub Pagesはhtmlファイルをおけばサイトとして運用できますが、[Jekyll](https://jekyllrb-ja.github.io)というブログ・静的Webサイトを生成するツールをつかえば、ブログを作ることができます。私のサイトもJekyllを使っています。Jekyllにはブログテーマが色々と用意されているので、公開されているテーマを使うことができます。

[Jekyll Themes](http://jekyllthemes.org)

本サイトでは、テンプレートは使わずに、Jekyllの仕組みに則って自分のオリジナルのデザインを使用しています。テーマの作り方はWordpressに近くて、テンプレートとなるhtmlをJekyllのルールにしたがって作っていくという流れです。自分で作るとCSSやJavaScriptを柔軟に使うことができて、やっぱりいいですね。

## リポジトリの運用

GitHub Pagesは`master`ブランチの内容が反映されます。Jeykllのテンプレートテーマを使えば何も考えずに`master`にコンテンツを入れておけばいいのですが、本サイトのようにテンプレートテーマを使っていない場合は工夫が必要です。

jekyllでビルドした結果の静的ページのファイルをmasterブランチに置く必要があるからです。

本サイトでは、`master`ブランチと`source`ブランチを作成して運用しています。

`master`ブランチは直接触らずにビルドした結果を入れておくブランチにしています。`source`ブランチにはサイトの元となるjekyllのソースコードがあります。実は`source`ブランチがリポジトリの本当のルートディレクトリになっています。`source`ブランチでビルドした結果を`_site`というディレクトリに入れていて、この`_site`というディレクトリが、`master`ブランチに紐づいています。

こうすることで、`master`はビルドされた結果を表示する静的サイト、`source`ブランチは`master`に置くファイルを生成するためのソースコードが入ったブランチにできます。

この運用で全く問題なくできているので、おすすめです。

## SEO対策

SEO対策は`Jekyll SEO Tag`というプラグインを入れているのと、Google Search Consoleにも一応登録しています。

とはいえ、やはりコンテンツが大事だな、という結論です。

記事が少ないころはあまり検索しても出てこないな、という感じでしたが、記事が増えてくるのとコンテンツが増えてくるにしたがって、いくつかの記事は検索でも上位に出てくるようになってきました。

## ローカライズ

記事のカテゴリには英語を使っています。そのカテゴリ名がurlに反映されるからです。しかしサイドバーに出るカテゴリ名は日本語で表示したいので、`Slug2Name`というプラグインを使っています。

[英語名カテゴリーを日本語表記に変換するフィルター](http://kerotaa.github.io/programming/2013/06/16/jekyll-category-slug-to-name-filter/)

`_config.yml`に

```
category_slugs:
  development: "開発"
  family: "家族"
  design: "デザイン"
  hobby: "趣味"
```

のように書くとカテゴリ名が日本語で表示されるようにしています。

## まとめ

GitHub Pagesでブログを運営するTipsを書いてみました。Wordpressのようにアップデートの対応や、サーバーの管理もしなくていいし、無料でできるし、SSLも有効だしカスタムドメインも使えるし、マークダウンでブログがかける、ということで、GitHub Pagesとてもおすすめです。