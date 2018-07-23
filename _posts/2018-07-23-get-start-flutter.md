---
layout: post
title:  "Flutterの始め方"
description: "Dart言語を使ったクロスプラットフォーム(iOS, Android)のモバイルアプリ開発フレームワークであるFlutterを始めました。"
date: 2018-07-23
categories: development
lang: ja_JP
tags:
- Flutter
- iOS
- Android
- モバイルアプリ
---

Dart言語を使ったクロスプラットフォーム(iOS, Android)のモバイルアプリ開発フレームワークであるFlutterを始めました。

[Flutter - Beautiful native apps in record time](https://flutter.io)

XcodeやAndroid Studioは事前にインストールします。

# Flutter sdkのインストール

[Get Started](https://flutter.io/setup-macos/)を参考に、flutter sdkをインストールします。

flutter sdkをダウンロードして、zipを展開し、$HOME/.bash_profileにPATHを通します。

```
$ export PTAH=path/to/flutter/bin
```

パスを通したあとは、doctorコマンドを使って環境設定状態を確認します。

```
$ flutter doctor
```

私の場合は以下のように表示されました。

```
  ╔════════════════════════════════════════════════════════════════════════════╗
  ║ WARNING: your installation of Flutter is 54 days old.                      ║
  ║                                                                            ║
  ║ To update to the latest version, run "flutter upgrade".                    ║
  ╚════════════════════════════════════════════════════════════════════════════╝



  ╔════════════════════════════════════════════════════════════════════════════╗
  ║                 Welcome to Flutter! - https://flutter.io                   ║
  ║                                                                            ║
  ║ The Flutter tool anonymously reports feature usage statistics and crash    ║
  ║ reports to Google in order to help Google contribute improvements to       ║
  ║ Flutter over time.                                                         ║
  ║                                                                            ║
  ║ Read about data we send with crash reports:                                ║
  ║ https://github.com/flutter/flutter/wiki/Flutter-CLI-crash-reporting        ║
  ║                                                                            ║
  ║ See Google's privacy policy:                                               ║
  ║ https://www.google.com/intl/en/policies/privacy/                           ║
  ║                                                                            ║
  ║ Use "flutter config --no-analytics" to disable analytics and crash         ║
  ║ reporting.                                                                 ║
  ╚════════════════════════════════════════════════════════════════════════════╝
  
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel beta, v0.5.1, on Mac OS X 10.13.6 17G65, locale en-JP)
[!] Android toolchain - develop for Android devices (Android SDK 28.0.1)
    ! Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses
[!] iOS toolchain - develop for iOS devices (Xcode 9.4.1)
    ✗ libimobiledevice and ideviceinstaller are not installed. To install, run:
        brew install --HEAD libimobiledevice
        brew install ideviceinstaller
    ✗ ios-deploy not installed. To install:
        brew install ios-deploy
[✓] Android Studio (version 3.1)
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
[!] VS Code (version 1.24.1)
[✓] Connected devices (1 available)
```

とりあえずiOSで動かすために、言われた通りライブラリ周りをインストールして行きます。

```
$ brew install --HEAD libimobiledevice
$ brew install ideviceinstaller ios-deploy
```

その後もう一度`flutter doctor`を実行すると、iOS toolchainではPython moduleが入ってないと怒られました。

```
[✓] Flutter (Channel beta, v0.5.1, on Mac OS X 10.13.6 17G65, locale en-JP)
[!] Android toolchain - develop for Android devices (Android SDK 28.0.1)
    ! Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses
[!] iOS toolchain - develop for iOS devices (Xcode 9.4.1)
    ✗ Missing Xcode dependency: Python module "six".
      Install via 'pip install six' or 'sudo easy_install six'.
[✓] Android Studio (version 3.1)
    ✗ Flutter plugin not installed; this adds Flutter specific functionality.
    ✗ Dart plugin not installed; this adds Dart specific functionality.
[!] VS Code (version 1.24.1)
[✓] Connected devices (1 available)

```

なので、言われた通り`six`モジュールをpipでインストールします。

```
$ pip install six
```

# VS Codeにflutterの拡張機能をインストールする

VS Codeをメインのエディタとして使用しているので、VS Codeの拡張機能をインストールします。

Extensionsパネルでflutterと検索すると、`Flutter`モジュールが見つかるのでインストールします。`Dart`モジュールは同時にインストールされます。

![VS Code Flutter Extension](/assets/posts/2018-07-23/vscode.png "VS Code Flutter Extension")

# VS Codeでサンプルを作って実行する

VS Codeのコマンドパレット(Ctrl+Shift+P)で、`Flutter: New Project`を選択します。プロジェクト名の入力を求められるので、適当に入力します。

するとプロジェクトが作成されて、カウントアップアプリのサンプルが実行できる状態になります。

Debugウィンドウから、Start Debuggingボタンを押すと、シミュレータが起動してアプリが実行されます。

![Flutter sample](/assets/posts/2018-07-23/sample.png "Flutter sample")


まだまだFlutter&Dart初心者で、Flutterの良さや、`Xamarin` `ReactNative`のような他のクロスプラットフォーム開発フレームワークに比べてどうなのかというところはわかってませんが、これから研究していこうと思います。