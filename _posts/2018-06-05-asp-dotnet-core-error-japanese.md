---
layout: post
title: "ASP.NET Coreでエラーメッセージを日本語にする方法"
description: "SP.NET CoreでWebアプリを開発していますが、デフォルトのバリデーションの仕組みを使うとエラーメッセージが英語になってしまい困っていました。モデルクラスのプロパティに全部のパターンを日本語で書くとか途方もないことをしたくないと思っていたところ、解決する方法を見つけました。"
date: 2018-06-05
categories: engineering
lang: ja_JP
tags:
- ASP.NET Core
- C#
- ASP.NET
- ローカライズ
- 日本語化
---

ASP.NET CoreでWebアプリを開発していますが、デフォルトのバリデーションの仕組みを使うとエラーメッセージが英語になってしまい困っていました。

モデルクラスのプロパティに全部のパターンを日本語で書くとか途方もないことをしたくないと思っていたところ、解決する方法を見つけました。

[ASP.NET Coreでエラーメッセージを日本語で表示する](https://qiita.com/h0ge/items/b7ffd65d0f11ac6382fd)

元ネタはこちらの記事のようです。

[Customization And Localization Of ASP.NET Core MVC Default Validation Error Messages](https://blogs.msdn.microsoft.com/mvpawardprogram/2017/05/09/aspnetcore-mvc-error-message/)

エラーメッセージはこんな感じでローカライズしました。

{% highlight xml %}
<data name="RequiredAttribute" xml:space="preserve">
    <value>{0}は必須項目です</value>
</data>
<data name="MaxLengthAttribute" xml:space="preserve">
    <value>{0}は{1}文字以内で入力してください</value>
</data>
<data name="MinLengthAttribute" xml:space="preserve">
    <value>{0}は{1}文字以上で入力してください</value>
</data>
<data name="EmailAddressAttribute" xml:space="preserve">
    <value>{0}の形式が正しくありません。</value>
</data>
<data name="CompareAttribute" xml:space="preserve">
    <value>{0}と{1}が一致しません。</value>
</data>
<data name="StringLengthAttribute" xml:space="preserve">
    <value>{0}は{1}文字以上{2}文字以下で入力してください。</value>
</data>
{% endhighlight %}