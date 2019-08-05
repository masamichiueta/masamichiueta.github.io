---
layout: post
title:  "no submodule mapping found in .gitmodulesを解決する"
description: "no submodule mapping found in .gitmodulesを解決する"
date: 2019-08-05
categories: development
lang: ja_JP
tags:
- gitmodules
- git
- submodules
---

git submoduleを更新しようとして、

`No submodule mapping found in .gitmodules for path 'path/to/submoddule`

というエラーが発生しました。

`git rm --cached path_to_submodule`

でキャッシュをクリアすると解決しました。