var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    config = require('../../gulpconfig');

gulp.task('connect', ['browsersync'], function () {
    connect.server({ base: config.wordpress.dest, port: 8001, debug: true, open: false});
});

gulp.task('dev', ['connect', 'watch']);
