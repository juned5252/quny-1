var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');
var server = require('gulp-develop-server');
var paths = require('../paths');
var configs = require('../configs');

/**
 * Runs unit tests with Mocha
 **/
gulp.task('test', () => {
  return gulp.src(paths.test, { read: false })
    .pipe(mocha(configs.mocha));
});

/**
 * Runs integration tests for Travis CI
 **/
gulp.task('travis', ['test']);
