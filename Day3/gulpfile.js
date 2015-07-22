var gulp    = require('gulp'),
    connect = require('gulp-connect');
//task
gulp.task('connect', function() {
  //connect plugin to start server
  connect.server({
    //port is optional
    root: 'www'
  });
});

//default command to bring up connect.
//instead of gulp connect, use gulp in command line.
gulp.task('default', ['connect']);
