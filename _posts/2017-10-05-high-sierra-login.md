---
layout: post
title: "macOS 10.13 High Sierraのログイン画面で、Othersが表示されるのを直す方法"
description: "High Sierraにアップグレード後、ログイン画面に自分のユーザー以外に「Others」という選択肢が表示されるようになりました。"
date: 2017-10-05
categories: development
lang: ja_JP
tags:
- Apple
- macOS
- High Sierra
---

# Others

High Sierraにアップグレード後、ログイン画面に自分のユーザー以外に「Others」という選択肢が表示されるようになりました。

ゲストログインはオフにしていたのでゲストではありません。

{% include ad.html %}

結論をかくと、rootユーザーがなぜか有効化されていました。

修正方法は

- システム環境設定を開く
- ユーザー&グループを開く
- 鍵マークを押してロックを解除する
- ログインオプションのネットワークアカウントサーバーのJoinをおす
- Open Disk Utilityをおす
- 鍵マークを押してロックを解除する
- メニューバーのEditからDisable Root Userを選択する

これでOthersが表示されなくなりました。

