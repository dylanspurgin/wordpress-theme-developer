var gulp    = require('gulp'),
    config  = require('../../gulpconfig'),
    del     = require('del'),
    rename  = require('gulp-rename'),
    replace = require('gulp-replace'),
    spawn   = require('child_process').spawn;


function execCommand(command, args, cb) {
    const ctx = spawn(command, args);
    ctx.stdout.on('data', function(data) {
        process.stdout.write(data);
    });
    ctx.stderr.on('data', function(data) {
        process.stderr.write(data);
    });
}

gulp.task('docker-config-clean', function () {
  return del(['docker-compose.yml']);
})

// Set theme directory in docker file
gulp.task('docker-config', ['docker-config-clean'], function () {
    return gulp.src(['docker-compose.template.yml'])
        .pipe(replace(/DOCKER_THEME_DIR/g, config.utils.theme))
        .pipe(rename('docker-compose.yml'))
        .pipe(gulp.dest('./'));
});

gulp.task('docker-up', ['docker-config'], function (cb) {
    execCommand('docker-compose', ['up'], cb);
});

gulp.task('docker-down', function (cb) {
    execCommand('docker-compose', ['down'])
});
