---
layout: post
title: "Platform State of the Unionまとめ"
description: "Platform State of the Unioまとめ"
date: 2020-06-23
categories: engineering
lang: ja_JP
tags:
- WWDC2020
- Apple
- アップル
- iOS
- macOS
- watchOS
- tvOS
---

# Platform State of the Unionまとめ

## Find My
- Apple Device以外のものも検出可能になる可能性

## Apple Silicon

- iPhone, iPadで使われているチップをMacに取り込む
- ハイパフォーマンス、低消費電力
- 全てのデバイスで統一されたアーキテクチャ
- Intel, Apple Siliconの両方に対応したユニバーサルアプリをビルドすることができる
- UnityもApple Siliconで動作するバージョンをリリース予定
- Big SurにはRosetta2というエミュレータが搭載されており、Apple Siliconのネイティブアプリでなくても実行することができる
- AOT
- JITプラットフォームではDynamic translation
- XcodeからRosetta環境で実行することも可能
- iOS, iPadのアプリを変更なしで実行できるようになる


## macOS11 Big Sur
- デザインの刷新
  - アイコン
  - ウィジェット、通知センター
  - ツールバー、サイドバー

## iPadOS
- これまでのタブバースタイルからサイドバーのスタイルに移行
- LiDARによって様々な計測が可能に
- Apple Pencilでオブジェクトの認識が可能に

## iOS14
- ウィジェット
  - 3つのサイズに対応
  - SwiftUIで作成可能
  - ホームスクリーンで表示できる
  - WidgetKitによって、Viewをアーカイブから作成しパフォーマンスを向上させる
  - ウィジェットをスタック形式で表示することも可能
- App Clipds
  - App Clipsのカードは自動生成される
  - カードをタップするとアプリのダウンロードが始まる
  - ホームには表示されない
  - App Clip code
  - 10MB以下でアプリに含めることができる
  - 8時間は通知を表示することができる
  - SignInWithAppleやApplePayが使える

## watchOS7
- SwiftUIのcomplicationをサポート
- WatchFaceの共有機能

## Xcode12
- デザインのBigSur対応
- ドキュメントタブでファイルを一括で開いたりできるように
- SwiftUIのビューをライブラリに追加することが可能に

## SwiftUI
- VStack, HStackにLazyバージョンが追加されパフォーマンス、メモリ管理が効率化