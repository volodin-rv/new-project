var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет
    babel = require('gulp-babel');

gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss') // Берем все sass файлы из папки sass и дочерних, если таковые будут
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('babel', function() {
  gulp.src('src/js/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами
  gulp.watch('src/js/**/*.js', ['babel']);
});