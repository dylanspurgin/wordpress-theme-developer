var gulp    = require('gulp'),
    config  = require('../../gulpconfig'),
    del     = require('del'),
    path    = require('path');

gulp.task('clean-build', function () {
  return del([
      path.join(config.utils.build.dest, '/**/*')
  ]);
});

gulp.task('clean-dist', function () {
  return del([
      path.join(config.utils.dist.dest, '/**/*')
  ]);
});
