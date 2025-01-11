---
layout: post
title: "Swift for TensorFlowをインストールして試してみる"
description: "先日TensorFlow Dev Summit2018でSwift for TensorFlowが発表されました。同時にTensorFlowのWebサイトにSwift for TensorFlowのページができています。私はTensorFlowについては初心者なのですが、今回はSwift for TensorFlowをインストールして試してみました！"
date: 2018-06-01
categories: engineering
hero-caption: <a href="https://www.tensorflow.org/community/swift">TensorFlow Webサイト</a>よりスクリーンショット
lang: ja_JP
tags:
- Swift
- Xcode
- TensorFlow
- Machine Lerning
- 機械学習
---

先日TensorFlow Dev Summit2018で`Swift for TensorFlow`が発表されました。

<iframe class="w-100" height="315" src="https://www.youtube.com/embed/Yze693W4MaU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

同時にTensorFlowのWebサイトに`Swift for TensorFlow`のページができています。

[Swift for TensorFlow](https://www.tensorflow.org/community/swift)

私はTensorFlowについては初心者なのですが、今回は`Swift for TensorFlow`をインストールして試してみました！

基本的にはGitHubのREADMEを見ながら実行していきます。

[Install Swift for TensorFlow](https://github.com/tensorflow/swift/blob/master/Installation.md)

# インストール

1. プレビルドパッケージをダウンロードする

私はmacを使っているので、GitHubのページから`Xcode`と書かれているものをダウンロードします。

[Xcode](https://storage.googleapis.com/swift-tensorflow/mac/swift-tensorflow-DEVELOPMENT-2018-05-10-a-osx.pkg)

![Download Swift for TensorFlow]({{ site.url }}/assets/posts/2018-06-01/download.png "Download Swift for TensorFlow")

2. ダウンロードしたパッケージを実行する
実行すると、`/Library/Developer/Toolchains/`にXcode toolchainが追加されます。Xcode toolchain（`.xctoolchain`）には、コンパイラーやその他の開発ツールが含まれています。

3. Xcodeを開いて、`環境設定`から`Compnents > Toolchains`にいき、インストールされた`Swift for TensorFlow toolchainを選択します。

![Xcode toolchain]({{ site.url }}/assets/posts/2018-06-01/toolchain.png "Xcode toolchain")

4. toolchainの選択はXcodeのみに適用されるので、コマンドラインを仕様する場合は、Swift toolchainをパスに追記する必要があります。

`export PATH=/Library/Developer/Toolchains/swift-latest/usr/bin:"${PATH}"`

これでインストールは完了です。

# Swift for TensorFlowを使ってみる

とりあえず使ってみるという部分はこちらに記載されています。

[Using Swift for TensorFlow](https://github.com/tensorflow/swift/blob/master/Usage.md)


## REPL(Read Eval Print Loop)

ターミナルを開いて、swiftを起動します。

`$ swift`

TensorFlowを実行してみます。

```
1> import TensorFlow
2> var x = Tensor<Float>([[1, 2], [3, 4]])
x: TensorFlow.Tensor<Float> = [[1.0, 2.0], [3.0, 4.0]]
3> x + x
$R0: TensorFlow.Tensor<Float> = [[2.0, 4.0], [6.0, 8.0]]
4> for _ in 0..<3 {
5.     x += x
6. }
7> x
$R1: TensorFlow.Tensor<Float> = [[8.0, 16.0], [24.0, 32.0]]
8> x[0] + x[1]
$R2: TensorFlow.Tensor<Float> = [32.0, 48.0]
```

## インタプリタ

スクリプト言語のようにインタプリタでSwiftを実行することができます。
`inference.swift`というファイルを作成して、以下のコードを書きます。

{% highlight swift %}
import TensorFlow

struct MLPClassifier {
    var w1 = Tensor<Float>(shape: [2, 4], repeating: 0.1)
    var w2 = Tensor<Float>(shape: [4, 1], scalars: [0.4, -0.5, -0.5, 0.4])
    var b1 = Tensor<Float>([0.2, -0.3, -0.3, 0.2])
    var b2 = Tensor<Float>([[0.4]])

    func prediction(for x: Tensor<Float>) -> Tensor<Float> {
        // The ⊗ operator performs matrix multiplication.
        let o1 = tanh(x ⊗ w1 + b1)
        return tanh(o1 ⊗ w2 + b2)
    }
}
let input = Tensor<Float>([[0.2, 0.8]])
let classifier = MLPClassifier()
let prediction = classifier.prediction(for: input)
print(prediction)
{% endhighlight %}

保存したら、swiftで実行します。

```
$ swift -O inference.swift
[[0.680704]]
```

`-O`をつけることではSwiftで最適化された状態で実行されます。

## Xcode

Xcodeで実行するには、上記インストール手順で、Xcodeのツールチェーンをインストールしたものに変更しておきます。

![Xcode toolchain]({{ site.url }}/assets/posts/2018-06-01/toolchain.png "Xcode toolchain")

新しいPlaygroundファイルを作成して、以下のコードを記述します。

{% highlight swift %}
import TensorFlow

let x = Tensor<Float>([[1, 2], [3, 4]])
print(x)
{% endhighlight %}

するとPlaygroundが実行されて、結果が表示されます。

以上で`Swift for TensorFlow`でTensorFlowを使用することができました。

次回は何かしらのモデルを学習させたり予測させたりしたいと思います。