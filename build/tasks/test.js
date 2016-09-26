var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');
var nightwatch = require('gulp-nightwatch');
var selenium = require('selenium-standalone');
var runSequence = require('run-sequence');
var server = require('gulp-develop-server');
var paths = require('../paths');
var configs = require('../configs');

/**
 * Runs unit tests with Mocha
 * Generates coverage report under /bin/coverage
 **/
gulp.task('test', function () {
  return gulp.src(paths.test, { read: false })
    .pipe(mocha(configs.mocha));
});

/** Downloads drivers required by Nightwatch under /bin/drivers */
gulp.task('e2e:drivers', function () {
  return new Promise(function (resolve) {
    selenium.install(configs.e2eDrivers, function () {
      resolve();
    });
  });
});

/** Runs end-to-end tests with Nightwatch and Chrome */
gulp.task('e2e', ['server'], function () {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: paths.nightwatch
    })).on('end', function () {
      server.kill();
    });
});

/**
 * Runs end-to-end tests with Nightwatch and PhantomJS
 * This task hangs on Windows
 **/
gulp.task('e2e:phantomjs', ['server'], function () {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: paths.nightwatch,
      cliArgs: { env: 'phantomjs' }
    })).on('end', function() {
      server.kill();
    });
});

/**
 * Runs integration tests for Travis CI
 * This task hangs on Windows
 **/
gulp.task('travis', function () {
  runSequence(['test', 'e2e:drivers'], 'e2e:phantomjs');
});
