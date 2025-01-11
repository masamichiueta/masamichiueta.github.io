---
layout: post
title:  "App Store ConnectにアプリをアップロードしたらToo many symbol filesと怒られた"
description: "App Store ConnectにXcodeからアプリをアップロードすると、少し時間がたってからメールが届きました。そのメールはアプリに問題が見つかりましたという題名で、Too many symbol filesというエラーが書かれていました。"
date: 2018-08-19
categories: engineering
lang: ja_JP
tags:
- App Store Connect
- iOS
- cocoapods
---

App Store ConnectにXcodeからアプリをアップロードすると、少し時間がたってからメールが届きました。

そのメールはアプリに問題が見つかりましたという題名で、

`Too many symbol files` というエラーが書かれていました。

iOS11からは32bitアプリのサポートが切られたことが影響している為でしょうか。
調べたところ、どうやらcocoapodsが生成しているフレームワークのアーキテクチャの設定ぽいということがわかりました。

[CocoaPods leaves dSYMs for unused architectures in archive](https://github.com/CocoaPods/CocoaPods/issues/7111)

アプリの`valid architecture`を`arm64`にすれば、64ビットになって解決するようです。

64ビットにする方法はこちらが参考になりました。

[【iOS】iPhoneアプリを64bit端末のみをターゲットにする方法](https://qiita.com/Yasunobu/items/59c89facfcbb36bdedda)
