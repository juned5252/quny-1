var gulp = require('gulp');
var server = require('gulp-develop-server');
var bs = require('browser-sync').create('Server');
var configs = require('../configs');
var paths = require('../paths');

// Start a server with Browser Sync functionality
gulp.task('watch', ['server:start'], function () {
  gulp.watch(paths.sources, ['server:restart']);
});

// Start a server. This task is used with the watch task above
gulp.task('server:start', function () {
  server.listen(configs.server, function (error) {
    if (!error) { bs.init(configs.bs); }
  });
});

// Restart a server. This task is used with the watch task above
gulp.task('server:restart', function () {
  server.restart(function (error) {
    if (!error) { bs.reload(); }
  });
});
