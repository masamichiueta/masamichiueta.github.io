---
layout: post
title:  "GitHub Pagesで無料ブログを作成する - Part3 Jekyllの設定をカスタマイズする"
description: "前回の記事では、Jekyllのテーマを利用する方法と記事を追加する方法を紹介しました。今回はさらにJekyllをカスタマイズしていきますが、確認を簡単にするためにまずJekyllをローカル環境で実行する方法を紹介します。"
date: 2020-05-28
categories: development
lang: ja_JP
tags:
- GitHub Pages
- ブログ
---

「GitHub Pagesで無料ブログを作成すr - Part3 Jekyllの設定をカスタマイズする」です。

他の記事はこちら

- [Part1 GitHubにリポジトリを作ってサイトを公開する](https://masamichi.me/development/2020/05/24/github-pages-blog-part1-repository.html)
- [Part2 Jekyllを使ってみる](https://masamichi.me/development/2020/05/26/github-pages-blog-part2-jekyll.html)
- [Part3 Jekyllの設定をカスタマイズする](https://masamichi.me/development/2020/05/28/github-pages-blog-part3-cutomize-setting.html)
- Part4 自分のオリジナルテンプレートを作る
- Part5 ファイルをうまく管理する

## ローカルでJekyllを実行する

前回の記事では、Jekyllのテーマを利用する方法と記事を追加する方法を紹介しました。

今回はさらにJekyllをカスタマイズしていきますが、確認を簡単にするためにまずJekyllをローカル環境で実行する方法を紹介します。

[Jekyllのサイト](https://jekyllrb.com/docs/)に書いてありますが、gemでjekyllをbundlerをインストールして起動することができます。

```
$ gem install jekyll bundler
$ cd your-repository
$ bundle exec jekyll serve
```

これまで作成したブログのリポジトリをクローンして、jekyllを実行できるようにします。

```
$ git clone your-repository
$ cd your-repository
$ bundle exec jekyll new . --force
```

`--force` オプションをつけるとこれまで作成したファイルがいったんJekyllのテンプレートで上書きされます。

デフォルトでは`minima`というテーマが有効になっています。

その状態でJekyllを実行してみます。

```
$ bundle exec jekyll serve
```

実行するとローカルでブログを立ち上げることができます。

`about.md`や`404.html`が生成されていたり、`index.md`が上書きされています。

`jekyll new`で初期化するとデフォルトのテーマである`minima`が適用されるので、今後は`minima`のテーマを想定して作っていきます。

## GitHub Pagesのプラグインとテーマを使う

もし、元々使っていたGitHub Pagesのテーマを使いたい場合には、`github-pages`のプラグインを入れる必要があります。

`Gemfile`を見ると、`github-pages`というgemがコメントアウトされていると思うので、記載されているコメントにしたがってコメントアウトを外します。
それに伴い、jekyllの方はコメントアウトします。

```
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
# gem "jekyll", "~> 3.8.7"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins
```

そしてgemをアップデートします。

```
$ bundle update
```

`_config.yml`に記載されているthemeを例えば`jekyll-theme-cayman`に戻して、`index.md`を元に戻せば、元々のテーマを使うことができます。

`minima`を使う場合はそのままでオッケーです。

上記のようにGitHub Pagesでは必要なGemをインストールして、`_config.yml`を変更すると設定をカスタマイズすることができます。
例えばテーマを変更したりサイトのタイトルを編集することができます。


## レイアウトとページ

`jekyll new`で初期化すると `about.md`や`404.html`が追加されたと思います。jekyllではこのようにブログの記事以外に個別のページを作ることができます。

例えば`about.md`というファイルを作ると、`https://username.github.io/about/`というページを作ることができます。

`404.html`は特別なファイルで、アクセスしたページが存在しないときに使われるファイルです。

このようにページをどんどん作成することができます。

`index.md`や`about.md`を見ると、`layout: home`や`layout: page`という設定がヘッダーのところに記載されていると思います。これは各テーマが作っているレイアウトのテンプレートを設定しています。テーマによって、いくつかのページのレイアウトが用意されていて、ページごとにどのレイアウトを使うかを設定できます。

`minima`には

- default
- home
- page
- post

の4つのレイアウトが用意されています。

次のPart4では、レイアウトを自分で変更してオリジナルのテンプレートを作る方法を書いていきます。