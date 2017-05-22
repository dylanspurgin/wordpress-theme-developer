var gulp        = require('gulp'),
    config      = require('../../gulpconfig'),
    remoteSrc   = require('gulp-remote-src'),
    decompress  = require('gulp-decompress'),
    path        = require('path'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    shell       = require('gulp-shell');

// Download and install latest wordpress
gulp.task('install-wordpress', function () {
    return remoteSrc(['latest.tar.gz'], {
        base: 'http://wordpress.org/'
    })
    .pipe(decompress({strip: 1}))
    .pipe(gulp.dest(config.wordpress.dest));
});

gulp.task('configure-wordpress', ['install-wordpress'] function(){
  return gulp.src([path.join(config.wordpress.dest, 'wp-config-sample.php')])
    .pipe(replace(/database_name_here/g, config.wordpress.db_name))
    .pipe(replace(/username_here/g, config.wordpress.db_user))
    .pipe(replace(/password_here/g, config.wordpress.db_password))
    .pipe(replace(/localhost/g, config.wordpress.db_host))
    .pipe(rename('wp-config.php'))
    .pipe(gulp.dest(config.wordpress.dest));
});

// Create symlink of build dir in wordpress theme directory
gulp.task('link-theme', ['configure-wordpress'], function () {
    shell.task([
        'ln -s ' + path.join(process.cwd(), config.utils.build) + ' ' + path.join(process.cwd(), config.wordpress.dest, 'wp-content/themes', config.utils.project)
    ])
});


gulp.task('setup', ['link-theme']);
