var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);


// Build a working copy of the theme
gulp.task('build', function (cb) {
    runSequence('clean-build',
                ['images', 'scripts', 'styles', 'fonts', 'theme'],
                cb);
});
