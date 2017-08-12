var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src('app/resources/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/resources/css'))
    // Reloading the stream
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('default', ['browserSync', 'sass'], function() {	
  gulp.watch('app/resources/scss/app.scss', ['sass']);
});

