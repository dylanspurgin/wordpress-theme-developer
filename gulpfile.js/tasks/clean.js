var gulp    = require('gulp'),
    config  = require('../../gulpconfig'),
    del     = require('del'),
    path    = require('path');

gulp.task('clean', function () {
  return del([
      path.join(config.utils.build, '/**/*')
  ]);
});
