var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var paths = require('../paths');

gulp.task('clean:assets', function() {
  return gulp.src('builtAssets/')
    .pipe(vinylPaths(del));
});

gulp.task('clean:coverage', function() {
  return gulp.src('test/coverage')
    .pipe(vinylPaths(del));
});

gulp.task('clean:lib', function() {
  return gulp.src(paths.e2eLib)
    .pipe(vinylPaths(del));
});
