---
layout: post
title:  "OS X 10.10.11 El Capitan にCocoaPodsをインストールする"
description: "OS X 10.10.11 El Capitan にCocoaPodsをインストールする"
date: 2015-11-25
categories: development
hero-image: "2015-11-25.jpg"
lang: js_JP
tags:
- iOS
- CocoaPods
- Xcode
---

> This post was originally posted in [Qiita](http://qiita.com/micchyboy1023/items/26440acb62a71d22b255) at 11/25 2015.

---

# El Capitanのrootless

OS X 10.10.11 El Capitanになり、rootlessが動作しており、rootlessの管理範囲内である `/usr/bin` には `pod` を配置できないため、

`sudo gem install cocoapods`

というコマンドを打つと

`Operation not permitted`

というエラーになります。


{% include ad.html %}

# Sudo-less installation

[CocoaPodsのインストールガイド](https://guides.cocoapods.org/using/getting-started.html#getting-started)に従い、ユーザーディレクトリにインストールすることで回避します。

まずは、ホームディレクトリにある（なければ作成する）`.bash_profile` に以下を追記します。

```
export GEM_HOME=$HOME/.gem
export PATH=$GEM_HOME/ruby/2.0.0/bin:$PATH   #(CocoaPodsのインストールガイドでは export PATH=$GEM_HOME/bin:$PATH になっている)
```

そして、`--user-install` オプションを付けて、CocoaPodsをインストールします。

```
gem install cocoapods --user-install
gem which cocoapods
/Users/ユーザ名/.gem/ruby/2.0.0/gems/cocoapods-0.39.0/lib/cocoapods.rb
pod --version
インストールされたバージョン
```

# その他
`/usr/bin/local`にインストールするなどもありますね。

`sudo gem install -n /usr/local/bin cocoapods`
