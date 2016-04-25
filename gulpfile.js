var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect');

gulp.task('site-sass', function() {
  gulp.src('./scss/main.scss')
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(rename('style.css'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./css'));
});

gulp.task('vendor-sass', function() {
  gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', './node_modules/font-awesome/scss/font-awesome.scss'])
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(concat('vendor.css'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./css'));
});

gulp.task('css-autoprefixer', function() {
  gulp.src('./css/*.css')
      .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
      .pipe(gulp.dest('./css'));
});

gulp.task('sass', function(callback) {
  runSequence(['site-sass', 'vendor-sass'], 'css-autoprefixer', callback);
});

gulp.task('vendor-js', function() {
  gulp.src(['./node_modules/jquery/dist/jquery.js', './node_modules/tether/dist/js/tether.js', './node_modules/bootstrap/dist/js/bootstrap.js'])
      .pipe(sourcemaps.init())
      .pipe(concat('vendor.js'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./js'));
});

gulp.task('fonts', function() {
  gulp.src('./node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest('./fonts'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('build', ['sass', 'vendor-js', 'fonts']);

gulp.task('serve', ['build', 'watch'], function() {
  connect.server({
    root: './',
    livereload: true,
    https: false
  });
});

gulp.task('default', ['serve']);
