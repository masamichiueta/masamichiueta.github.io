.PHONY: bootstrap
bootstrap:
	bundle check > /dev/null || bundle install --path vendor/bundle --without documentation

serve:
	bundle exec jekyll serve

build:
	bundle exec jekyll build JEKYLL_ENV=production

update:
	bundle update

# Apps ページのヒーロー用アイコン。各アプリの assets/icon.png から縮小版を作り直す。
# アプリを追加したら一度これを実行すれば、ヒーローの敷き詰めにも自動で並ぶ
# （apps.html は assets/apps-hero/ にある PNG をそのまま拾う）。
.PHONY: hero-icons
hero-icons:
	@mkdir -p assets/apps-hero
	@for src in */assets/icon.png; do \
		app=$${src%%/*}; \
		sips -s format png -Z 256 "$$src" --out "assets/apps-hero/$$app.png" > /dev/null; \
		echo "  assets/apps-hero/$$app.png"; \
	done
