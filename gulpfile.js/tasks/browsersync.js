var gulp        = require('gulp'),
    browsersync = require('browser-sync'),
    config      = require('../../gulpconfig').browsersync;

gulp.task('browsersync', ['build'], function() {
  browsersync(config);
});
