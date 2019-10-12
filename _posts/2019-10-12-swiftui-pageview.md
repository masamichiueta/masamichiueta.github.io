---
layout: post
title:  "SwiftUIでUIPageViewControllerとSegmentedControlを使う方法"
description: "SwiftUIでUIPageViewControllerとSegmentedControlを使う方法を紹介します。"
date: 2019-10-12
categories: development
image: /assets/posts/2019-07-25/cover.png
hero-caption: <a href="https://developer.apple.com/xcode/swiftui/">Appleサイト</a>よりスクリーンショット
lang: ja_JP
tags:
- SwiftUI
- ページ
- SegmentedControl
- PageView
---

SwiftUIでUIPageViewControllerとSegmentedControlを使う方法を紹介します。

Appleの公式チュートリアルを参考にしています。

[Interfacing with UIKit](https://developer.apple.com/tutorials/swiftui/interfacing-with-uikit)

`UIKit`の`UIPageViewController`をラップする`PageViewController`と、SwiftUIから`PageViewController`を使うための`PageView`を作ります。

まず、`PageViewController`です。

{% highlight swift %}

struct PageViewController: UIViewControllerRepresentable {
    var controllers: [UIViewController]
    @Binding var currentPage: Int

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    func makeUIViewController(context: Context) -> UIPageViewController {
        let pageViewController = UIPageViewController(
            transitionStyle: .scroll,
            navigationOrientation: .horizontal)
        pageViewController.dataSource = context.coordinator
        pageViewController.delegate = context.coordinator

        return pageViewController
    }

    func updateUIViewController(_ pageViewController: UIPageViewController, context: Context) {
        pageViewController.setViewControllers(
            [controllers[currentPage]], direction: .forward, animated: true)
    }

    class Coordinator: NSObject, UIPageViewControllerDataSource, UIPageViewControllerDelegate {
        var parent: PageViewController

        init(_ pageViewController: PageViewController) {
            self.parent = pageViewController
        }

        func pageViewController(
            _ pageViewController: UIPageViewController,
            viewControllerBefore viewController: UIViewController) -> UIViewController?
        {
            guard let index = parent.controllers.firstIndex(of: viewController) else {
                return nil
            }
            if index == 0 {
                return nil
            }
            return parent.controllers[index - 1]
        }

        func pageViewController(
            _ pageViewController: UIPageViewController,
            viewControllerAfter viewController: UIViewController) -> UIViewController?
        {
            guard let index = parent.controllers.firstIndex(of: viewController) else {
                return nil
            }
            if index + 1 == parent.controllers.count {
                return nil
            }
            return parent.controllers[index + 1]
        }

        func pageViewController(_ pageViewController: UIPageViewController, didFinishAnimating finished: Bool, previousViewControllers: [UIViewController], transitionCompleted completed: Bool) {
            if completed,
                let visibleViewController = pageViewController.viewControllers?.first,
                let index = parent.controllers.firstIndex(of: visibleViewController)
            {
                parent.currentPage = index
            }
        }
    }
}

{% endhighlight %}

`UIViewControllerRepresentable`の`makeUIViewController(context: Context)`で`UIPageViewController`を作成します。 `updateUIViewController`で`PageViewController`のページを表示します。

`UIPageViewController`の`Delegate`と`DataSource`を設定するために、`Coordinator`クラスを作成し、`makeUIViewController`で`delgate`と`dataSource`を`context`の`coordinator`にセットします。

次にこの`PageViewController`を使って、SwiftUIのViewを表示する`PageView`を作ります。

{% highlight swift %}

struct PageView<Page: View>: View {
    var viewControllers: [UIHostingController<Page>]
    @Binding var currentPage: Int

    init(_ views: [Page], currentPage: Binding<Int>) {
        self._currentPage = currentPage
        self.viewControllers = views.map { UIHostingController(rootView: $0) }
    }

    var body: some View {
        PageViewController(controllers: viewControllers, currentPage: $currentPage)
    }
}

{% endhighlight %}

こちらは簡単で、ページとして表示するViewと、`currentPage`を受け取って、`PageViewController`に渡します。

これを`SegmentedControl`と組み合わせて使います。

{% highlight swift %}

struct ContentView: View {
    @State private var page = 0

    var body: some View {
        VStack {
            Picker("Page", selection: $page) {
                Text("Page 1").tag(0)
                Text("Page 2").tag(1)
            }
            .pickerStyle(SegmentedPickerStyle())
            .padding(EdgeInsets(top: 0, leading: 12, bottom: 0, trailing: 12))
            PageView([
                Text("Page1"),
                Text("Page2")
            ], currentPage: $page)
        }
    }
}

{% endhighlight %}

`PageView`の`currentPage`は`@Binding`プロパティなので、`@State`プロパティを`PageView`の`currentPage`にセットします。これによって、`currentPage`を書き換えると、ページが自動的に変更されます。

SwiftUIで`SegmentedControl`を使うには`Picker`に`SegmentedPickerStyle`をセットします。こちらの`selection`プロパティも`@Binding`プロパティなので、`PageView`の`currentPage`に渡したものと同じプロパティを渡します。

これで`SegmentedControl`と`PageView`を組み合わせることができました。

![PageView](/assets/posts/2019-10-12/pageviewcontroller.gif "PageView")

gistはこちら

[PageView](https://gist.github.com/masamichiueta/f07fd47040b2add051afa45d73966481)

