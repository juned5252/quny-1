var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');
var paths = require('../paths');
var configs = require('../configs');
var nightwatch = require('gulp-nightwatch');
var selenium = require('selenium-download');

gulp.task('test', function() {
  return gulp.src(paths.test, {read: false})
    .pipe(mocha(configs.mocha));
});

gulp.task('test:coverage', function() {
  return gulp.src(paths.test, {read: false})
    .pipe(mocha(configs.mochaIstanbul));
});

gulp.task('e2e', function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/e2e/nightwatch.json'
    }));
});

gulp.task('e2e:chrome', function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/e2e/nightwatch.json',
      cliArgs: ['--env chrome']
    }));
});

gulp.task('e2e:drivers', function() {
  return new Promise(function(resolve) {
    selenium.ensure(paths.e2eLib, function() {
      resolve();
    });
  });
});

gulp.task('e2e:drivers:update', function() {
  return new Promise(function(resolve) {
    selenium.update(paths.e2eLib, function() {
      resolve();
    });
  });
});
