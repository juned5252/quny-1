var gulp = require('gulp');
var server = require('gulp-develop-server');
var configs = require('../configs');
var paths = require('../paths');

function startServer(config) {
  return new Promise((resolve, reject) => {
    server.listen(config, (err) => {
      if (!err) resolve();
      else reject(error);
    });
  });
}

/** Starts a development server */
gulp.task('watch', () => {
  return startServer(configs.devServer);
});
