var gulp        = require('gulp');
var runSequence = require('run-sequence').use(gulp),
    zip = require('gulp-zip'),
    config      = require('../../gulpconfig');

// Create zip of build for release
gulp.task('dist', function (cb) {
    return runSequence('build', 'images-optimize', 'clean-dist', 'archive', cb);
});

gulp.task('archive', function () {
    return gulp.src(config.utils.dist.src)
        .pipe(zip(config.utils.theme+'.zip'))
        .pipe(gulp.dest(config.utils.dist.dest));
})
