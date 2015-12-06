'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const lint = require('gulp-eslint');
const scssPath = './library/scss/**/*.scss';

gulp.task('sass', () => {
  gulp.src(scssPath)
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
gulp.task('watch', () => {
  gulp.watch(scssPath, ['sass']);
});
