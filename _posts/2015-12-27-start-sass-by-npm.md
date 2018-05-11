---
layout: post
title:  "npmでミニマムに始めるSass"
description: "GitHub Pagesでいくつか静的なWebページを作成しているのですが、生のcssではなく、sassでcssを作成することにしました。"
date: 2015-12-27
categories: development
lang: ja_JP
tags:
- npm
- sass
- github pages
---

> This post was originally posted in [Qiita](http://qiita.com/micchyboy/items/0074f002d8f1663577a2) at 12/27 2015.

---

[GitHub Pages](https://github.com/micchyboy1023)でいくつか静的なWebページを作成しているのですが、生のcssではなく、sassでcssを作成することにしました。

sassを使おうとして、調べるとgemでsassをインストールして始めるという記事が見つかります。
- [CSSのメタ言語Sass(SCSS)、LESSの完全入門](http://qiita.com/ritukiii/items/67b3c50002b48c6186d6)

また、Compassというものも出てきたりします。
- [CSSの常識が変わる！「Compass」の基礎から応用まで！](http://liginc.co.jp/designer/archives/11623#a30)

またフロントエンドの環境などについて知っていたりすると、gruntやgulpといったタスクランナーも使えるんじゃないかと思ったりして、それらでsassを使う方法も出てきたりします。
- [gulp インストール～基本設定の備忘録（windows）](http://qiita.com/yokoh9/items/0a69dd5f8753c1ea54f5)

ふむふむ、といった感じで記事を読んだりするのですが、やらないといけないことやルール、覚えないといけないことが多くて、結局どうするのがいいのだろうと迷ってしまいました。

gruntやgulpは確かに便利ですが、ミニマムに始めるにはちょっとやることが多い気がしたり、一週間後に見た時にどうやるか忘れてる自信もあります。
ミニマムにやる方法を調べる中たどり着いたのが、npmのrun scriptを使うという方法です。
- [Grunt/Gulpで憔悴したおっさんの話](http://t32k.me/mol/log/npm-run-script/)
- [Watch & Compile your Sass with npm.](https://medium.com/@brianhan/watch-compile-your-sass-with-npm-9ba2b878415b#.qcwi0gu2w)

# npm
npmについては以下の記事がわかりやすいです。
- [npm とか bower とか一体何なんだよ！Javascript 界隈の文脈を理解しよう](http://qiita.com/megane42/items/2ab6ffd866c3f2fda066)

npmはnode.jsで書かれたツールのパッケージマネージャで、gruntやbowerもnpmでインストールします。[Grunt/Gulpで憔悴したおっさんの話](http://t32k.me/mol/log/npm-run-script/)によると、"Node.js/npmに関する知識とかUNIXに関する知識は、数ヶ月で変わることもない＂ので、npmでやるのが簡単そうです。

{% include ad.html %}

# 始める
先に大まかな流れを書くと以下のようになります。
npmのみを使うので、シンプルです。

- nodeをインストールする
- npmでsassのコンパイルに必要なツール、ファイルの監視に必要なツールをインストールする
- npm run scriptでsassをコンパイルする

では、サンプルを用いて詳細を書きます。

## 環境
使用している環境は以下です。
- OS: OSX 10.11.2 El Capitan
- パッケージマネージャ: homebrew 0.9.5

## node.jsのインストール

homebrewでnode.jsをインストールします。
`$ brew install node`

## プロジェクトを作る
例として、Webサイト用のディレクトリをデスクトップに作成します。ここでは、mysiteというディレクトリにします。

`$ mkdir ~/Desktop/mysite && cd ~/Desktop/mysite`

npmの初期設定を行います。
`$ npm init`

いろいろ聞かれますが、とりあえずエンター。

sass用のディレクトリ scss 、sassをコンパイルした後にcssを出力する用のディレクトリ cssを作成します。
`$ mkdir scss css`

ソースをgitで管理する場合に、npmを使用した際に作成されるnode_moduleは不必要なので、gitで管理しないように.gitignoreを作成します。

```
$ touch .gitignore
```

.gitignoreに関しては、GitHubによって公開されている[.gitignoreリポジトリのNode.gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore)を参考にするといいと思います。

次にscssファイルを作成します。

`$ touch style.scss`

以上でプロジェクトの構成は終了です。

## npmでツールをインストールする

sassのコンパイルに必要なツール node-sass と、ファイルの更新管理に使用するツール nodemon をnpmでインストールします。

`$ npm install -D node-sass nodemon`

## sassをコンパイルする

npmを使用するとpackage.jsonというファイルができていますが、その中のscriptsの部分に、sassコンパイル用のscript, 監視用のscriptを記述します。

```
"scripts": {
  "build-css": "node-sass --include-path scss scss/style.scss css/style.css",
  "watch-css": "nodemon -e scss -x \"npm run build-css\""
}
```

build-css, watch-cssの部分を npm run の後に書くことで、コマンドを実行できます。

npm run build-css コマンドを実行すると scss/style.scss が css/style.css にコンパイルされ、 npm run watch-css コマンドを実行するとscssの変更が監視されます。


style.scssにコードを書いて、コンパイルします。

```
$my-color: #3d3d3d;

body {
  color: $my-color;
}
```

`$ npm run build-css`

これで、css/style.css が作成され、以下のようなファイルができると思います。

```
body {
  color: #3d3d3d;
}
```

# シンプルに

上記のように、nodeの使い方以外を知らなくても、sassを使用する環境を整えることができ、比較的シンプルなのではないかと思っています。
sassライフが捗りそうです。

# おまけ
nodeを使えばローカルサーバーも簡単に立ち上げられます。

[local-web-server](https://www.npmjs.com/package/local-web-server)を使用します。

`$ npm install -D local-web-server`

package.json

```
"scripts": {
  "build-css": "node-sass --include-path scss scss/style.scss css/style.css",
  "watch-css": "nodemon -e scss -x \"npm run build-css\"",
  "ws": "ws"
}
```

`$ npm run ws`
