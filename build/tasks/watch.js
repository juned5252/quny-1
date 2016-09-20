var gulp = require('gulp');
var server = require('gulp-develop-server');
var bs = require('browser-sync').create('Server');
var configs = require('../configs');
var paths = require('../paths');

gulp.task('watch', ['server:start'], function () {
  gulp.watch(paths.sources, ['server:restart']);
});

gulp.task('server:start', [], function () {
  server.listen(configs.server, function (error) {
    if (!error) { bs.init(configs.bs); }
  });
});

gulp.task('server:restart', function () {
  server.restart(function (error) {
    if (!error) { bs.reload(); }
  });
});
