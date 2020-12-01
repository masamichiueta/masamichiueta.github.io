.PHONY: bootstrap
bootstrap:
	bundle check > /dev/null || bundle install --path vendor/bundle --without documentation

serve:
	bundle exec jekyll serve

build:
	bundle exec jekyll build JEKYLL_ENV=production
