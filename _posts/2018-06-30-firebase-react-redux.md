---
layout: post
title:  "FirebaseとReactとReduxで認証付きのWebアプリのサンプルを作りました"
description: "先日書いた記事　FirebaseとReactで認証付きアプリのサンプルを実行するまでの続きで、この認証サンプルをReduxを使うように変更したサンプルを作ってみました。"
date: 2018-06-30
categories: development
lang: ja_JP
tags:
- Firebase
- React
- Redux
- JavaScript
---

先日書いた記事　[FirebaseとReactで認証付きアプリのサンプルを実行するまで](https://masamichiueta.github.io/development/2018/06/18/firebase-react-authenticaton.html) の続きで、この認証サンプルをReduxを使うように変更したサンプルを作ってみました。

[masamichiueta/react-redux-firebase-auth](https://github.com/masamichiueta/react-redux-firebase-auth)

動きとしては、

1. `Auth`コンポーネントの`componentWillMount`で、`firebase.auth.onAuthStateChanged`を登録して、すでにログイン状態だったら、stateにuserを登録してログイン後の画面を表示する。未ログイン状態だったらトップ画面を表示する。
2. ログインページでログインしたら`auth.doSignInWithEmailAndPassword`で返ってくるユーザー情報をstateに登録する。

という流れです。

1つ悩んでいることがあって、クライアントでレンダリングするので、`firebase.auth.onAuthStateChanged`のコールバックが呼ばれるまでに少しラグがあり、一瞬ローディング画面を出さざるを得ない形になっています。

このあたりの解消法というか、ベストプラクティスがありましたら、[@masamichiueta](https://twitter.com/masamichiueta)に教えていただけるとありがたいです。