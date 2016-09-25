var gulp    = require('gulp');
var server  = require('gulp-develop-server');
var bs      = require('browser-sync').create('Server');
var configs = require('../configs');
var paths   = require('../paths');

/** Starts a server and reloads it when files change */
gulp.task('watch', ['server:start'], function () {
  gulp.watch(paths.sources,['server:restart']);
});

/** Starts a server with BrowserSync functionality */
gulp.task('server:start', function () {
  return new Promise(function(resolve, reject) {
    server.listen(configs.server, function (error) {
      if (!error) {
        bs.init(configs.browserSync);
        resolve();
      } else {
        reject(error);
      }
    });
  });
});

/** Restarts the server */
gulp.task('server:restart', function () {
  server.restart(function (error) {
    if (!error) {
      bs.reload();
    }
  });
});


/** Start a simpe server */
gulp.task('server', function (done) {
  server.listen(configs.server, function() {
    done();
  });
});