// ==== FONTS ==== //

var gulp          = require('gulp'),
    plugins       = require('gulp-load-plugins')({ camelize: true }),
    config        = require('../../gulpconfig').fonts;

// Copy changed fonts from the source folder to `build` (fast)
gulp.task('fonts', function() {
  return gulp.src(config.build.src)
  .pipe(plugins.changed(config.build.dest))
  .pipe(gulp.dest(config.build.dest));
});
