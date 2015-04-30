var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha = require('gulp-mocha');
var nightwatch = require('gulp-nightwatch');
var browserify = require('gulp-browserify');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var notify = require('gulp-notify');

gulp.task('lint', function () {
  gulp
    .src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('tests', function () {
  gulp
    .src('./test/bdd/*.test.js', { read: false })
    .pipe(mocha({ reporter: 'progress' }));
});

gulp.task('tests-e2e', function () {
  gulp
    .src('')
    .pipe(nightwatch({
      configFile: './nightwatch.json'
    }));
});

gulp.task('scripts', function () {
    gulp
      .src('./js/*.js')
      .pipe(browserify({
        insertGlobals: true,
        debug: !process.env.production
      }))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function () {
    gulp
      .src('./stylus/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./css/'));
});

gulp.task('connect', function () {
  connect.server({
    root: './',
    livereload: true
  });
  gulp.src('').pipe(notify('Server running!'));
});

gulp.task('watch', function () {
    gulp.watch([
      './*.html',
      './css/*.css',
      './stylus/*.styl',
      './dist/*.js',
      './js/*.js'
    ], [
      'lint',
      'tests',
      'scripts',
      'styles',
      'tests-e2e',
    ]);
});

gulp.task('default', [
  'lint',
  'tests',
  'scripts',
  'styles',
  'connect',
  'tests-e2e',
]);
