---
layout: post
title:  "UIScrollViewとUIStackViewで、UITableViewのハイライトを作る"
description: "UITableViewのようなレイアウトを作る際に、UIScrollViewとUIStackViewを使って作る場合もあるかと思います。UITableViewは選択されたセルをハイライトすることができますが、UIScrollViewとUIStackViewの場合はそのままではハイライトができません。今回はセルのハイライトを再現する方法を紹介します。"
date: 2019-12-06
categories: development
image: /assets/posts/2019-12-06/storyboard.png
lang: ja_JP
tags:
- UIStackView
- UIScrollView
- UITableView
- ハイライト
---

UITableViewのようなレイアウトを作る際に、UIScrollViewとUIStackViewを使って作る場合もあるかと思います。

UITableViewは選択されたセルをハイライトすることができますが、UIScrollViewとUIStackViewの場合はそのままではハイライトができません。

今回はセルのハイライトを再現する方法を紹介します。

リポジトリはこちら。
[StackViewCellHighlight](https://github.com/masamichiueta/StackViewCellHighlight)

![StackViewCellHighlight](/assets/posts/2019-12-06/StackViewCellHighlight.gif "StackViewCellHighlight")

## 全体の構成

全体のStoryboardは画像のようになっています。

![Storyboard](/assets/posts/2019-12-06/storyboard.png "Storyboard")

`UIScrollView`の中に`UIStackView`を配置して、それぞれのCellに該当するViewを配置しています。

それぞれのCellの中には、カスタムViewの`SelectableCellView`を配置しています。この`SelectableCellView`が選択時のハイライト処理を実装しています。また、`UIScrollView`は`UIButton`のイベントをキャンセルできる`UIButtonCancelableScrollView`というカスタムクラスにしています。このスクロールビューを使うことで、セルの選択時にスクロールをした場合にスムーズにスクロールすることができます。

## SelectableCellViewとSelectableButton

`SelectableCellView`は内部に`SelectableButton`を配置しています。

`SelectableButton`には`setSelected(_ selected: Bool, animated: Bool)`関数を定義していて、セルの選択状態が変更された時に呼び出します。`isSelected`の状態管理と背景色の処理をしています。`isHighlight`もオーバーライドしていて、`isSelected`と合わせて背景色のハンドリングをしています。

**SelectableButton**

{% highlight swift %}

class SelectableButton: UIButton {

    override var isHighlighted: Bool {
        get {
            return super.isHighlighted
        }
        set {
            backgroundColor = (isSelected || newValue) ? UIColor.opaqueSeparator : UIColor.white
            super.isHighlighted = newValue
        }
    }

    func setSelected(_ selected: Bool, animated: Bool) {
        func update() {
            isSelected = selected
            backgroundColor = selected ? UIColor.opaqueSeparator : UIColor.white
        }
        if animated {
            UIView.animate(withDuration: 0.35, animations: update)
        } else {
            update()
        }
    }

}

{% endhighlight %}

`SelectableCellView`では、`SelectableButton`の`touchDown`, `touchCancel`, `touchUpInside`にハンドラを設定しています。それぞれのイベントで選択状態をセットします。

{% highlight swift %}

class SelectableCellView: UIView {

    private lazy var button: SelectableButton = {
        let button = SelectableButton()
        return button
    }()

    required init?(coder: NSCoder) {
        super.init(coder: coder)
        addSubview(button)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.topAnchor.constraint(equalTo: topAnchor, constant: 0).isActive = true
        button.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 0).isActive = true
        button.trailingAnchor.constraint(equalTo: trailingAnchor, constant: 0).isActive = true
        button.bottomAnchor.constraint(equalTo: bottomAnchor, constant: 0).isActive = true

        button.addTarget(self, action: #selector(touchDown(button:)), for: .touchDown)
        button.addTarget(self, action: #selector(cancel(button:)), for: .touchCancel)
        button.addTarget(self, action: #selector(handleTap(button:)), for: .touchUpInside)
    }

    var didTap: (() -> Void)?

    @objc private func handleTap(button: SelectableButton) {
        setSelected(true, animated: false)
        didTap?()
    }

     @objc private func touchDown(button: SelectableButton) {
        setSelected(true, animated: false)
    }

     @objc private func cancel(button: SelectableButton) {
        setSelected(false, animated: false)
    }

     func setSelected(_ selected: Bool, animated: Bool) {
        button.setSelected(selected, animated: animated)
    }
}

{% endhighlight %}

これで`UIStackView`に配置したViewがタップされた時に背景がハイライトされるようになります。

## NavigationControllerのスワイプバックに対応する

`UITableViewController`には、セルをタップした時にセルを選択してプッシュ遷移した後、画面に戻ってきたらハイライトを消す`clearsSelectionOnViewWillAppear`という設定があります。

これを実現するには、選択されたセルを保持して、ViewControllerの`viewWillAppear`で適切に選択状態をハンドリングする必要があります。

{% highlight swift %}
class ViewController: UIViewController {

    ....

    var selectedCell: SelectableCellView?
    var clearsSelectionOnViewWillAppear: Bool = true

    ....

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        if let selectedCell = selectedCell, clearsSelectionOnViewWillAppear {
            transitionCoordinator?.animate(alongsideTransition: { _ in
                selectedCell.setSelected(false, animated: animated)
            }, completion: { context in
                if context.isCancelled {
                    selectedCell.setSelected(true, animated: false)
                } else {
                    self.selectedCell = nil
                }
            })
        }
    }
}
{% endhighlight %}

これで、`UITableView`のハイライトを`UIScrollView`と`UIStackView`で実現することができました。

こちらにサンプルコードを置いてあります。

[StackViewCellHighlight](https://github.com/masamichiueta/StackViewCellHighlight)