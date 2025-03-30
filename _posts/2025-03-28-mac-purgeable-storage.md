---
layout: post
title: "Macのストレージに空き容量があるのに、実際には空き容量がない状態になっているとき"
description: ""
date: 2025-03-28
categories: engineering
image: /assets/posts/2025-03-28/cover.jpg
hero-caption: <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E3%82%B7%E3%83%AB%E3%83%90%E3%83%BC%E3%81%AEimac%E3%81%A8%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%81%AE%E3%82%B5%E3%83%95%E3%83%AC%E3%83%BC%E3%82%B9%E3%81%ABapple-magic-keyboard%E3%82%92%E6%90%AD%E8%BC%89-3xQ65cknLPk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>の<a href="https://unsplash.com/ja/@quaritsch?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Quaritsch Photography</a>が撮影した写真
lang: ja_JP
tags: 
- Mac
- Storage
---

先日写真アプリを見ていると、容量が足りない的なメッセージが表示されていました。

データはiCloudに入れていてまだ余裕もあるのと、Mac側のストレージアプリで空き容量を確認しても200GBくらいは空き容量があり、おかしいなと思ってシステムレポートやディスクユーティリティを確認すると、確かに空き容量が数GBとほとんどありませんでした。

色々と調査した結果、ディスクユーティリティで確認できるパージ可能なデータがポイントでした。

![ディスクユーティリティ](/assets/posts/2025-03-28/disk-utility.png "ディスクユーティリティ")

このパージ可能なデータは、おそらくローカルに保存しているがiCloudに保存されているデータで削除可能なデータだと思います。

このパージ可能なデータが、ストレージに表示されている空き容量とほぼ同じ容量を使用しているため、実際のストレージの空き容量としては残りわずかとなっていました。

実際にはMacがローカルストレージの残容量に対して最適化してパージ可能なデータを自動で削除してくれると思うのですが、写真アプリの表示が直らなかったので、強制的にストレージを圧迫することでパージ可能なデータを削除して、空き容量を確保してみました。

具体的には `mkfile` コマンドで指定した容量のファイルを作成し、パージ可能なデータが削除されていることを確認しながら、ローカルストレージが確保されるまで繰り返しました。

ストレージに表示される空き容量がまだあるのに、なぜかストレージがないという警告がでた方は参考にしてみてください。
