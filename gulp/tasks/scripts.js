var gulp = require('gulp'),
    // uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    // browserify = require('gulp-browserify'),
    sourcemaps = require('gulp-sourcemaps');


// Scripts tasks
gulp.task('scripts', function() {
  console.log('Starting scripts task');

  return gulp.src('./app/assets/scripts/**/*.js')
    .pipe(plumber(function(err) {
      console.log('Scripts Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    // .pipe(uglify())
    .pipe(concat('bundle.js'))
    // .pipe(browserify())
    .pipe(sourcemaps.write('../../../maps'))
    .pipe(gulp.dest('./app/temp/scripts'))
});
