var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var paths = require('../paths');

// Deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src(paths.outputs)
    .pipe(vinylPaths(del));
});
