'use strict';
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const mocha = require('gulp-mocha');
const nightwatch = require('gulp-nightwatch');
const browserify = require('gulp-browserify');
const stylus = require('gulp-stylus');
const connect = require('gulp-connect');
const notify = require('gulp-notify');
const shell = require('gulp-shell');

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

gulp.task('coverage', shell.task(['./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage']));

gulp.task('default', [
  'lint',
  'tests',
  'scripts',
  'styles',
  'connect',
  'tests-e2e',
]);
