---
layout: post
title:  "Interface BuilderのUI要素にベースのカスタムクラスが適用されているか検出する"
description: "Interface BuilderのUI要素にベースのカスタムクラスが適用されているか検出する方法について。"
date: 2019-03-18
categories: development
image: /assets/posts/2019-03-18/cover.png
lang: ja_JP
tags:
- Interface Builder
- iOS
- Xcode
- IBLinter
---

Interface BuilderのUI要素にベースのカスタムクラスが適用されているか検出する方法について。

アプリ開発のプロジェクトでは、スタイルガイドに沿ったベースのUIクラスを作成されている場合もあると思います。
例えばアプリのプライマリーカラーと同じ文字色のラベルやボタンなどが考えられます。Interface BuilderでUIを作成されている方は多いと思いますが、Interface Builderを使っているとそういったベースとなるUIクラスを適用し忘れがちです。
ベースとなるクラスを使えばいいのに、IB上で色やフォントを設定してしまったり、そもそもベースクラスの存在に気づかなかったりなど、どうしても起こってしまう問題かと思います。

[IBLinter](https://github.com/IBDecodable/IBLinter)の`use_base_class`ルールを使うとInterface BuilderのUI要素に指定のカスタムクラスが適用されているかをチェックすることができます。

例えば全ての`UILabel`に`PrimaryLabel`や`SecondaryLabel`のどちらかのクラスを設定する必要がある場合はこの`use_base_class`ルールが便利です。
使い方は`IBLinter`の設定ファイルである`.iblinter.yml`に`use_base_class_rule`を追加し、チェックしたいクラスを`element_class`に、適用したいカスタムクラスの一覧を`base_classes`に記述します。

例えば以下のような形です。

```
enabled_rules:
  - use_base_class
use_base_class_rule:
  - element_class: UILabel
    base_classes:
      - PrimaryLabel
      - SecondaryLabel
```

これで`IBLinter`を実行すると、`PrimaryLabel`または`SecondaryLabel`が適用されていないラベルにはXcode上でwarningが表示されるようになります。

![UseBaseClass](/assets/posts/2019-03-18/cover.png "UseBaseClass")

これでIB上でベースクラスが適用されていないUI要素を確認することができます。

サンプルプロジェクトを作成したので実際に警告が表示されるのを試してみてください。

[masamichiueta/UseBaseClassRule](https://github.com/masamichiueta/UseBaseClassRule)