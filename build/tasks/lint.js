var gulp = require('gulp');
var eslint = require('gulp-eslint');
var pugLinter = require('gulp-pug-linter');
var stylint = require('gulp-stylint');
var paths = require('../paths');

gulp.task('lint:js', function () {
  return gulp.src([
    '**/*.js',
    '!node_modules/**',
    '!test/coverage/**'
  ]).pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:pug', function () {
  return gulp
    .src(paths.views)
    .pipe(pugLinter())
    .pipe(pugLinter.reporter('fail'));
});

gulp.task('lint:stylus', function () {
  return gulp.src(paths.stylus)
    .pipe(stylint())
    .pipe(stylint.reporter())
    .pipe(stylint.reporter('fail'));
});
