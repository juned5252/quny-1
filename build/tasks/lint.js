var gulp = require('gulp');
var eslint = require('gulp-eslint');
var pugLinter = require('gulp-pug-linter');
var stylint = require('gulp-stylint');
var paths = require('../paths');

gulp.task('lintjs', function () {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lintpug', function () {
  return gulp
    .src(paths.views)
    .pipe(pugLinter())
    .pipe(pugLinter.reporter('fail'));
});

gulp.task('lintstyl', function () {
  return gulp.src(paths.stylus)
    .pipe(stylint())
    .pipe(stylint.reporter())
    .pipe(stylint.reporter('fail'));
});
