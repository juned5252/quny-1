var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');
var paths = require('../paths');
var configs = require('../configs');
var nightwatch = require('gulp-nightwatch');
var selenium = require('selenium-download');

// Tests to run on Travis CI
gulp.task('travis', ['test:coverage', 'e2e:drivers', 'e2e']);

// Run unit tests with Mocha
gulp.task('test', function() {
  return gulp.src(paths.test, {read: false})
    .pipe(mocha(configs.mocha));
});

// Run unit tests with Mocha and generate coverage using Istanbul
gulp.task('test:coverage', function() {
  return gulp.src(paths.test, {read: false})
    .pipe(mocha(configs.mochaIstanbul));
});

// Download the selenium standalone driver and the chrome web driver
// These drivers are required to use Nightwatch
gulp.task('e2e:drivers', function() {
  return new Promise(function(resolve) {
    selenium.ensure(paths.e2eLib, function() {
      resolve();
    });
  });
});

// Update the selenium standalone driver and chrome web driver
// Latest versions are placed under test/e2e/lib
gulp.task('e2e:drivers:update', function() {
  return new Promise(function(resolve) {
    selenium.update(paths.e2eLib, function() {
      resolve();
    });
  });
});

// Run end-to-end tests with Nightwatch
gulp.task('e2e', function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/e2e/nightwatch.json'
    }));
});

// Run end-to-end test with Nightwatch, Chrome version
gulp.task('e2e:chrome', function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/e2e/nightwatch.json',
      cliArgs: ['--env chrome']
    }));
});
