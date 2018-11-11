---
layout: post
title:  "2018年最新版　GitHub Pagesでカスタムドメインを使用する"
description: "のブログはGitHub Pagesとjekyllで運用していますが、カスタムドメインの設定をしたのでその方法を記載しておきます。"
date: 2018-07-01
categories: development
lang: ja_JP
tags:
- GitHub
---

このブログはGitHub Pagesとjekyllで運用していますが、カスタムドメインの設定をしたのでその方法を記載しておきます。

# ドメインを取得する

まず自分の使用したいドメインを取得します。私はムームードメインで取得しました。

[ムームードメイン](https://muumuu-domain.com)

理由は、
- 色々なドメインを取り扱っている
- 安い
- Whois情報公開代行が無料かつ複雑な条件がない

という点です。

以前はお名前.comでドメインを取得していましたが、Whois情報公開代行について、ドメイン取得時に申し込まないと無料にならないという条件があり、当時設定していなかったため使用するのをやめました。こういう複雑な条件を設定しているところはあまり使いたくないですね。

# GitHub Pagesのリポジトリを設定する

デフォルトのGitHub Pagesのリポジトリ名は、`username.github.io`というリポジトリだと思います。このリポジトリの設定画面でカスタムドメインの設定をすることができます。

![GitHub Pagesの設定]({{ site.url }}/assets/posts/2018-07-01/githubpages.png "GitHub Pagesの設定")

私のドメインは、`masamichi.me`なので、そのドメインを入力し、Enforce HTTPSも有効化します。

リポジトリには`CNAME`というファイルが追加されます。


# ムームードメインでDNSの設定を行う

ムームードメインの管理画面で、ドメイン操作　→ ムームーDNSを選択します。

自分が取得したドメインが表示されていると思いますが、処理の所の変更ボタンを押します。

![処理の変更]({{ site.url }}/assets/posts/2018-07-01/mumu1.png "処理の変更")

設定2のところで、Aレコードを以下のIPアドレスで4つ追加します。

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

![Aレコード追加]({{ site.url }}/assets/posts/2018-07-01/mumu2.png "Aレコード追加")

以上で設定は完了です。