var gulp  = require('gulp');
var del   = require('del');
var vp    = require('vinyl-paths');
var paths = require('../paths');

/** Deletes /builtAssets */
gulp.task('clean:assets', function() {
  return gulp.src(paths.assets)
    .pipe(vp(del));
});

/** Deletes /test/coverage */
gulp.task('clean:coverage', function() {
  return gulp.src(paths.coverage)
    .pipe(vp(del));
});

/** Deletes /test/e2e/lib */
gulp.task('clean:lib', function() {
  return gulp.src(paths.e2eLib)
    .pipe(vp(del));
});
