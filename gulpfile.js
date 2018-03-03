var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('./scss/estilos.scss')
    .pipe(sass({
      outputStyle: 'compact'
    }))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
