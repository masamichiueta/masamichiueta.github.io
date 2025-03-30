---
layout: post
title:  "GitHub Pagesで無料ブログを作成する - Part2 Jekyllを使ってみる"
description: "JekyllはGitHub Pagesで使用することができる静的サイトのジェネレータです。Jekyllを使うことで、Markdownで書いたブログの記事やhtmlで作ったページをビルドして、公開用のhtmlとして生成することができます。"
image: /assets/posts/2020-05-26/cover.png
hero-caption: <a href="https://jekyllrb.com">Jekyllのサイト</a>よりスクリーンショット
date: 2020-05-26
categories: engineering
lang: ja_JP
tags:
- GitHub Pages
- ブログ
---

「GitHub Pagesで無料ブログを作成する - Part2 Jekyllを使ってみる」です。

他の記事はこちら。

- [Part1 GitHubにリポジトリを作ってサイトを公開する](/engineering/2020/05/24/github-pages-blog-part1-repository.html)
- [Part2 Jekyllを使ってみる](/engineering/2020/05/26/github-pages-blog-part2-jekyll.html)
- [Part3 Jekyllの設定をカスタマイズする](/engineering/2020/05/28/github-pages-blog-part3-cutomize-setting.html)
- [Part4 自分のオリジナルのテーマを作る](/engineering/2020/05/31/github-pages-blog-part4-original-theme.html)

## Jekyllとは

JekyllはGitHub Pagesで使用することができる静的サイトのジェネレータです。Jekyllを使うことで、Markdownで書いたブログの記事やhtmlで作ったページをビルドして、公開用のhtmlとして生成することができます。

htmlを事前に生成して、公開時にはサーバーサイドによる動的な処理を実行せずhtmlを表示するだけなので、静的サイトになります。
JekyllにはWordpressのように、いくつかのテーマが提供されていて、それらを活用することで簡単にブログサイトを構築することができます。

静的サイトジェネレータは他にも[HUGO](https://gohugo.io)や[Gatsby](https://www.gatsbyjs.org)などがありますが、GitHub Pagesはデフォルトで[Jekyll](https://jekyllrb.com)をサポートしています。そのため、特別なカスタマイズをしなければ、Jekyllで事前にビルドする必要もなくGitHub Pagesでテーマを活用したブログを構築することができます。

## Jekyllを使ってみる

GitHub PagesでJekyllのテンプレートを使うのは簡単です。リポジトリのメニューからSettingsを開いて、下の方にあるGitHub Pagesの設定をみると、 `Choose a theme` というメニューがあります。

![Choose a theme](/assets/posts/2020-05-26/chooseatheme.png "Choose a theme")

ボタンをクリックするとテーマセレクタ画面が表示されます。テーマを選択することでプレビューを見ることもできます。
良さそうなテーマがあれば、`Select theme`で決定します。

![Select theme](/assets/posts/2020-05-26/selecttheme.png "Select theme")

するとテーマが適用されます。具体的にはリポジトリに `_config.yml` というファイルが新しく追加されています。中身は以下のようになっています。

```
theme: jekyll-theme-cayman (実際に選んだテーマ)
```

Jekyllはこの`_config.yml`に基づいて静的サイトを生成しますが、GitHub PagesはJekyllをサポートしているので既存のテーマを使うだけであればこれだけでテーマを適用することができます。

## 新規ポストを投稿する

Jekyllのルールではブログの記事は `_posts`フォルダの中に、`YYYY-MM-DD-title.md`という形式で記事を配置する必要があります。例えば、`2020-05-26-first-post.md`などです。

Markdownファイルを作成したら、ファイルの一番上の部分にタイトルや日付などのメタデータを書き込み、その下に記事のコンテンツを書き込みます。

```
---
layout: page
title: "First post"
date: 2020-05-26
---

# Fist post

First post

```

これをリポジトリに配置すれば記事が公開されます。

トップページに記事の一覧を表示するには`index.md`に以下を追記します。

```
{% raw %}
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
{% endraw %}
```

[次のPart3](/engineering/2020/05/28/github-pages-blog-part3-cutomize-setting.html)ではJekyllの設定をカスタマイズする方法を書いていきます。