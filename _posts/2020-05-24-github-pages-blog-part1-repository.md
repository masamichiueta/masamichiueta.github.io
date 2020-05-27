---
layout: post
title:  "GitHub Pagesで無料ブログを作成する - Part1 GitHubにリポジトリを作ってサイトを公開する"
description: "以前、GitHub Pagesでブログを運用し始めてから4年くらいたったというブログを書いたのですが、概要を書いただけで具体的な構築方法はあまり記述していなかったので、何回かに分けてブログを作っていく方法を書いていきたいと思います。"
image: /assets/posts/2020-05-24/cover.png
hero-caption: <a href="https://pages.github.com">GitHub Pagesのサイト</a>よりスクリーンショット
date: 2020-05-24
categories: development
lang: ja_JP
tags:
- GitHub Pages
- ブログ
---

以前、 [GitHub Pagesでブログを運用し始めてから4年くらいたった](https://masamichi.me/development/2019/12/14/github-pages-blog.html)というブログを書いたのですが、概要を書いただけで具体的な構築方法はあまり記述していなかったので、何回かに分けてブログを作っていく方法を書いていきたいと思います。

基本的には [GitHubのヘルプページ](https://help.github.com/ja/github/working-with-github-pages/about-github-pages)を読むのが確実です。

### 掲載予定

- [Part1 GitHubにリポジトリを作ってサイトを公開する](https://masamichi.me/development/2020/05/24/github-pages-blog-part1-repository.html) (この記事です)
- [Part2 Jekyllを使ってみる](https://masamichi.me/development/2020/05/26/github-pages-blog-part2-jekyll.html)
- Part3 Jekyllの設定をカスタマイズする
- Part4 自分のオリジナルテンプレートを作る
- Part5 ファイルをうまく管理する

## 1. GitHub Pagesについて知る

GitHub PagesはGitHubにリポジトリを作りそこにサイト用のファイルを配置することで、Webサイトとして運用できる仕組みです。 GitHub Pagesのサイトには個人のユーザーであればユーザーサイトか、プロジェクトのサイトがあります。

ユーザーサイトは `username.github.io` (usernameのところは自分のGitHubユーザー名に置き換える)というリポジトリを作成する必要があります。 `username.github.io` リポジトリの `master` ブランチに配置されたファイルがWebサイトとして公開されます。その場合のurlは`https://username.github.io`になります（設定次第でカスタムドメインを使うことも可能です）。

プロジェクトサイトは特にリポジトリ名にルールはなく、普段作成しているリポジトリで管理できます。urlは`https://username.github.io/project`(projectの部分がリポジトリ名に置き換わる)という形になります。
ただしプロジェクトサイトでは`master`ブランチが公開されるのではなく、`gh-pages`ブランチが公開されます。

主に個人の情報を公開したりブログを作ったりする場合は、`username.github.io`のユーザーサイト、自分が作っているOSSのようなプロジェクトについての情報を公開する場合はプロジェクトサイトを使う、という形で使い分けていけばいいと思います。

ここではユーザーサイトをサンプルに作ってみます。

## 2. GitHubにリポジトリを作る

ではGitHubに実際にリポジトリを作ってみましょう。

GitHubの右上のナビゲーションバーのプラスボタンから`New repository`を選びます。

![New repository](/assets/posts/2020-05-24/newrepository.png "New repository")

`Repository Name`のところに、`username.github.io`を入力します。私の場合はすでに作成済なのでエラーになります。

![username.github.io](/assets/posts/2020-05-24/input.png "username.github.io")

`Initialize this repository with a README` のチェックはどちらでも大丈夫です。

これでリポジトリの作成ができました。

## 3. リポジトリにファイルを作って公開する

リポジトリが作成されたらすでに公開準備は整っているので、ファイルを追加してサイトを公開します。

まずリポジトリをクローンします。

```
$ git clone https://github.com/username/usernam.github.io.git
```

そして`index.md`というファイルを作成して適当に中身を書きます。

index.md
```
Hello world
```

これをリポジトリに追加してGitHubにプッシュします。

```
$ git add index.md
$ git commit -m "first commit"
$ git push
```

これで`https://username.github.io`にアクセスすると、Hello worldと表示されると思います。

![hello world](/assets/posts/2020-05-24/helloworld.png "hello world")

以上でサイトの公開ができました。

## 4. 設置を確認する

リポジトリのナビゲーションメニューのSettingに移動するとGitHug Pagesの設定を確認することができます。

![settings](/assets/posts/2020-05-24/settings.png "settings")

設定の中にEnforce HTTPSという項目があるので、このチェックをオンにしておくことをお勧めします。

![Enforce HTTPS](/assets/posts/2020-05-24/https.png "Enforce HTTPS")

以上で無事サイトを公開することができました。

[次のPart2]((https://masamichi.me/development/2020/05/26/github-pages-blog-part2-jekyll.html))ではJekyllというツールを使って、ブログ形式のサイトを構築する方法を書いていきます。