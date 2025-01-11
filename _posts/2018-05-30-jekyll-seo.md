---
layout: post
title: "JekyllでSEO対策をする方法"
description: "グーグルやヤフーの検索でブログをヒットさせるには、SEOを行う必要がります。今回はJekyllのSEO対策について書きます。よくブログで使われるワードプレスは最初からSEOに最適化された状態ですが、JekyllでもSEO対策を行うことが出来ます。"
date: 2018-05-30 00:00
categories: engineering
lang: ja_JP
tags:
- Jekyll
- SEO
- ブログ
---

# JekyllでSEO対策をする

グーグルやヤフーの検索でブログをヒットさせるには、SEOを行う必要がります。
今回はJekyllのSEO対策について書きます。

よくブログで使われるワードプレスは最初からSEOに最適化された状態ですが、JekyllでもSEO対策を行うことが出来ます。

## グーグルの検索で上位に表示されるには

様々な検索エンジンがありますが、グーグルが寡占状態です。つまり、ブログのページがグーグルの検索インデックスに登録され、グーグル検索で上位に表示されるようにする必要があります。

JekyllにはSEOを簡単にしてくれるいくつかのプラグインがあります。プラグインとその他のSEO対策についてまとめました。

1. `jekyll-seo-tag`プラグイン
2. `jekyll-sitemap`プラグイン
3. 画像のオルトタグ
4. レスポンシブ
5. スピード


## 1. `jekyll-seo-tag`プラグイン

Jekyllには、SEO用の設定を作ってくれる`jekyll-seo-tag`というプラグインがあります。

こちらの記事に詳しく書いてあります。
[Search engine optimization for GitHub Pages](https://help.github.com/articles/search-engine-optimization-for-github-pages/)

使い方としては、`_config.yml`に`jekyll-seo-tag`を追加します。

```
plugins:
  - jekyll-seo-tag
```

そして、`head`タグを記入しているところに、`seo`プラグインを記述します。

```
<html>
  <head>
    {% raw %}
    {% include head.html %}
    {% seo %}
    {% endraw %}
  </head>
</html>
```

これで、タイトルや見出しなど、headタグで必要なSEO対策が行われます。


## 2. `jekyll-sitemap`プラグイン

グーグルにブログのページがインデックス登録されるためには、サイトマップは重要な要素です。
`jekyll-sitemap`プラグインを使うことで、サイトマップが記述された`sitemap.xml`を自動生成することが出来ます。

[jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)

`jekyll-sitemap`プラグインを使うには、`_config.yml`に`jekyll-sitemap`を追加します。

```
plugins:
  - jekyll-sitemap
```

そして、jekyllをビルドすると`sitemap.xml`が生成されます。


## 3. 画像のオルトタグ

画像のオルトタグは、画像がない場合に表示されるテキストです。オルトタグはクローリング時にロードされるので、画像に記述しておく方がキーワードが多くなり上位に表示されやすくなります。

```
<img alt="jekyll seo" title="Jekyll SEO" src="/images/jekyll-seo.jpg">
```

## 4. レスポンシブ

グーグルはレスポンシブなサイトでモバイルでも見やすいかということをSEOのランキングのパラメータに設定しています。
サイトがモバイルに対応しているかどうかは、 [Mobile Friendly Test](https://search.google.com/test/mobile-friendly?utm_source=mft&utm_medium=redirect&utm_campaign=mft-redirect)というサイトで確認することが出来ます。

Jekyllのテーマは、モバイルに対応しているものがほとんどなので、非対応なものを使わない限りは大丈夫かと思います。


## 5. スピード

ランキング上位に表示されるにはページのロードスピードも重要です。
Jekyllのサイトは、通常十分早いですが、JavaScriptを使い過ぎたりするのは注意しましょう。