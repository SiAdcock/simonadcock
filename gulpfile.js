const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('./library/scss/**/*.scss')
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));
});
