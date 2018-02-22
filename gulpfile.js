'use strict';

/* Automatizar tareas mediante GULP */



/*
* Dependencias o imports

**Se instalan con nmp install libreria --save-dev
*/


var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

/*
* Tareas
*/

gulp.task('concatenar', function() {
  return gulp.src('./src/html/*.html')
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('sass', function () {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('dist/css/'))
});




/*Definir tarea por defecto, se hace automatico con gulp*/

gulp.task('default',function() {

    gulp.watch('src/**/*.*',['concatenar','sass']);

});



