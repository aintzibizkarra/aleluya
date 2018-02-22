'use strict';

/* Automatizar tareas mediante GULP */



/*
* Dependencias o imports

**Se instalan con nmp install libreria --save-dev
*/


var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
const babel = require('gulp-babel');

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
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass', function () {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('es6toes5', () =>
    gulp.src('./src/js/main.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./dist/js/'))
);

gulp.task('move', function(){
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'));
});



/*Definir tareas por defecto, se hace automatico con gulp*/

gulp.task('default',function() {

    gulp.watch('src/**/*.*',['concatenar','sass','move']);

});



