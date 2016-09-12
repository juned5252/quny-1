var gulp = require('gulp');
var stylus = require('gulp-stylus');
var runSequence = require('run-sequence');
var bs = require('browser-sync');
var paths = require('../paths');

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(gulp.dest(paths.cssOutput))
    .pipe(bs.get('Server').stream());
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean', 
    ['stylus'],
    callback
  );
});
