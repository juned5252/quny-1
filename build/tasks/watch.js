var gulp = require('gulp');
var server = require('gulp-develop-server');
var configs = require('../configs');
var paths = require('../paths');

/** Starts a development server */
gulp.task('watch', () => {
  return new Promise((resolve, reject) => {
    server.listen(configs.devServer, (err) => {
      if (!err) resolve();
      else reject(error);
    });
  });
});
