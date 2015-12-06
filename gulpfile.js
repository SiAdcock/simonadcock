'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const lint = require('gulp-eslint');

gulp.task('sass', () => {
  gulp.src('./library/scss/**/*.scss')
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));
});
gulp.task('lint', () => {
  return gulp.src(
    [
      './gulpfile.js',
      './library/js/scripts.js'
    ])
    .pipe(lint())
    .pipe(lint.format())
    .pipe(lint.failOnError());
});
