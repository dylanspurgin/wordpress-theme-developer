var gulp    = require('gulp'),
    spawn   = require('child_process').spawn;


function execCommand(command, args, cb) {
    const ctx = spawn(command, args);
    ctx.stdout.on('data', function(data) {
        process.stdout.write(data);
    });
    ctx.stderr.on('data', function(data) {
        process.stderr.write(data);
    });
    ctx.on('close', function(code) {
        if(cb){cb(code === 0 ? null : code);}
    })
    process.on('SIGINT', function () {
        killChild(ctx)
    });
    process.on('exit', function () {
        killChild(ctx)
    });
}

function killChild (child) {
    child.kill('SIGTERM');
}

gulp.task('docker-up', function () {
    execCommand('docker-compose', ['up']);
});
