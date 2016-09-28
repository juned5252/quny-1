var gulp = require('gulp');
var eslint = require('gulp-eslint');
var pugLinter = require('gulp-pug-linter');
var stylint = require('gulp-stylint');
var runSequence = require('run-sequence');
var paths = require('../paths');

/** Runs eslint on all .js files */
gulp.task('lint:js', function () {
  return gulp.src(paths.scripts)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/** Runs pug-linter on all .pug files */
gulp.task('lint:pug', function () {
  return gulp.src(paths.views)
    .pipe(pugLinter())
    .pipe(pugLinter.reporter('fail'));
});

/** Runs stylint on all .styl files */
gulp.task('lint:styl', function () {
  return gulp.src(paths.stylus)
    .pipe(stylint())
    .pipe(stylint.reporter())
    .pipe(stylint.reporter('fail'));
});

/** Runs all the linting tasks */
gulp.task('lint', function () {
  runSequence('lint:js', 'lint:pug', 'lint:styl');
});
