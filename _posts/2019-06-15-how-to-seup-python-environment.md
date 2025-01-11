---
layout: post
title:  "macOSにPythonの環境を構築する方法"
description: "Pythonは機械学習やデータ分析でもっとも人気のある言語だと思います。ここではmacOSにPythonの環境を作る方法を紹介します。"
date: 2019-06-15
hero-caption: Photo by <a href="https://unsplash.com/@hiteshchoudhary?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hitesh Choudhary</a> on <a href="https://unsplash.com/search/photos/python?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
categories: engineering
image: /assets/posts/2019-06-15/cover.jpg
lang: ja_JP
tags:
- macOS
- Python
- pyenv
- virtualenv
---

Pythonは機械学習やデータ分析でもっとも人気のある言語だと思います。ここではmacOSにPythonの環境を作る方法を紹介します。

## 1. pyenvをインストールする

[Pyenv](https://github.com/pyenv/pyenv)はPythonのバージョン管理をしてくれる便利なツールです。
Pyenvは[homebrew](https://brew.sh)を使ってインストールすることができます。もしhomebrewをインストールしていなければインストールしましょう。homebrewはmacOSで人気のあるパッケージマネージャです。

pyenvをインストールするには以下のコマンドを実行します。

```
$ brew update
$ brew install pyenv
```

pyenvをインストールした後、bashの設定ファイルに設定を追記する必要がありますので、以下のコマンドを実行します。

```
$ echo ‘export PYENV_ROOT=”$HOME/.pyenv”’ >> ~/.bash_profile
$ echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
$ echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bash_profile
```

## 2. pyenv-virtualenvをインストールする

[Pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)はPythonのVirtualenvを管理するPyenvのプラグインです。

VirtualenvとはPythonの隔離された環境を作る方法です。例えばディレクトリごとにPythonのバージョンを変更することができます。

Pyenv-virtualenvはpyenv同様homebrewでインストールすることができます。

```
$ brew install pyenv-virtualenv
```

pyenv同様、bashの設定ファイルに設定を追記します。

```
$ echo ‘eval “$(pyenv virtualenv-init -)”’ >> ~/.bash_profile
```

以上で環境を作る準備ができました。ターミナルを再起動してPythonの環境を作っていきましょう。

## Pythonの環境を作る

まず始めに、使用するPythonのバージョンを決めましょう。特に気にしなければ、最新のバージョンを使います。

どのバージョンや環境をインストールできるかはpyenvで確認することができます。

```
$ pyenv install --list
```

Pythonをインストールします。

```
$ pyenv install 3.7.3
```

次にVirtualenvを作成します。

```
$ pyenv virtualenv 3.7.3 your-virtual-env-name
```

Pythonのプロジェクトのディレクトリに移動して、そのディレクトリのPythonの環境を指定します。

```
$ cd path-to-your-direcotry
$ pyenv local your-virtual-env-name
```

`pyenv local` コマンドは `.python-version`ファイルを作成します。そのファイルによって、ディレクトリ内でどのpyenv環境を使うかが指定されます。

これでpyenvが自動的にPythonの環境を作成したvirtualenvに切り替えてくれるようになりました。

## ライブラリをインストールする

Pythonを使う場合、 numpy, pandasやtenforflowのようなライブラリを使用することが多いかと思います。Pythonのライブラリをインストールするには、pipというPython用のパッケージマネージャを使用します。virtualenvと組み合わせることで、それぞれのvirtualenvごとにライブラリをインストールすることができます。例えばnumpyをインストールするにはpipでインストールコマンドを実行します。

```
$ pip install numpy
```

簡単ですね！

## ライブラリリストをエクスポートする

pipはインストールしたライブラリをテキストファイルに出力することができます。また逆にテキストファイルからライブラリ一覧をインストールすることができます。これは他のmacで同じ環境を作る時やdockerのようなコンテナに環境を再現する際に重要です。Pythonの環境をdockerにすることで、自分の環境で動作するスクリプトをAWSバッチやAWS Elastic Beanstalkのようなdockerをサポートするサービスで動かすことができます。

エクスポート

```
$ pip freeze > requirements.txt
```

インポート

```
$ pip install -r requirements.txt
```

これでポータブルなPython環境を作ることができます。
