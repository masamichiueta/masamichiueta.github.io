---
layout: post
title: "Apple Silicon搭載 MacBook Pro M1で Homebrewとrbenvをインストールする"
description: ""
date: 2020-12-01
categories: development
lang: ja_JP
tags:
- Apple Silicon
- Homebrew
- rbenv
---

先日購入したApple Silicon搭載 MacBook Pro M1にこのブログをビルドするためにHomebrewとrbenvをインストールしたのでメモ。

## Homebrewのインストール

Homebrewには現状2つのインストール方法があるようです。

1. TerminalをRosetta2を有効にして起動し通常インストールする
2. デフォルトではないディレクトリにネイティブインストールする

せっかくのM1なので、Rosetta使う方法ではなく2のネイティブインストールしました。

ネイティブインストールするには現状いくつかのステップが必要ですが、こちらのYoutubeとgistが参考になりました。

#### Youtube

<iframe class="w-100" height="315" src="https://www.youtube.com/embed/nv2ylxro7rM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Gist

<script src="https://gist.github.com/nrubin29/bea5aa83e8dfa91370fe83b62dad6dfa.js"></script>

`/opt/homebrew`以下にインストールするのが今のところ一般的なようです。

- [Discussion: longterm Homebrew prefix on Apple Silicon Macs](https://github.com/Homebrew/brew/issues/9177)


## rbenvをインストールする

rbenvは通常どおりhomebrewでインストール可能。

```bash
brew install rbenv
rbenv init
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc
```

その後rubyをインストールしようとするとopensslのコンパイルでエラー

```bash
rbenv install 2.7.2

Downloading openssl-1.1.1h.tar.gz...
-> https://dqw8nmjcqpjn7.cloudfront.net/5c9ca8774bd7b03e5784f26ae9e9e6d749c9da2438545077e6b3d755a06595d9
Installing openssl-1.1.1h...

BUILD FAILED (macOS 11.0.1 using ruby-build 20201118)

```

opensslをインストールする

```bash
brew install openssl
```

`.zshrc`に設定を追記.


```bash
echo 'export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@1.1)"' >> ~/.zshrc
```

再度rubyをインストール

```bash
rbenv install 2.7.2
```

無事インストールができました。