var gulp        = require('gulp');
var mocha       = require('gulp-spawn-mocha');
var nightwatch  = require('gulp-nightwatch');
var selenium    = require('selenium-standalone');
var runSequence = require('run-sequence');
var paths       = require('../paths');
var configs     = require('../configs');

/** Runs certain tests on Travis CI */
gulp.task('travis', function(cb) {
  runSequence('test:coverage', 'selenium', 'e2e:phantomjs', cb);
});

/** Runs unit tests with Mocha */
gulp.task('test', function() {
  return gulp.src(paths.test, {read: false})
    .pipe(mocha(configs.mocha));
});

/** 
 * Runs unit tests and generate a coverage report with Istanbul
 * Report files generated under /test/coverage
 **/
gulp.task('test:coverage', function() {
  return gulp.src(paths.test, {read: false})
    .pipe(mocha(configs.mochaIstanbul));
});

/** 
 * Gets drivers required by Nightwatch
 * Drivers downloaded under /test/e2e/lib
 **/
gulp.task('selenium', function() {
  return new Promise(function(resolve, reject) {
    selenium.install(configs.selenium, function() {
      resolve();
    });
  });
});

/** Runs end-to-end tests with Nightwatch and Firefox */
gulp.task('e2e',function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: paths.nightwatch
    }));
});

/** Runs end-to-end tests with Nightwatch and Chrome */
gulp.task('e2e:chrome',function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: paths.nightwatch,
      cliArgs: {env: 'chrome'}
    }));
});

/** Runs end-to-end tests with Nightwatch and PhantomJS */
gulp.task('e2e:phantomjs', function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: paths.nightwatch,
      cliArgs: {env: 'phantomjs'}
    }));
});
