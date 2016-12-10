var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin');
// var jshint = require('gulp-jshint');
// var changed = require('gulp-changed');
// var plumber = require('gulp-plumber');
// var minifyCss = require('gulp-minify-css');

// var SRC = 'js_sep/main.js';
// var DEST = 'dest';

//Script Task

gulp.task('scripts', function() {
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});


//Style Task

gulp.task('styles', function() {
    return
    gulp.src('scss/main.scss')
    .pipe(sass({
        style: 'compressed'
    }))
    // sass('scss/**/*.scss')
    .pipe(gulp.dest('build/css/main.css'))
});


// Images Task

gulp.task('images', function() {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('build/images'));
});


//Watch Task
//Watches JS
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'images', 'watch']);



// gulp.task('changed', function() {
//     return gulp.src(SRC)
//         .pipe(plumber())
//         .pipe(changed(DEST))
//         .pipe(gulp.dest(DEST));
// });

// gulp.task('jshint', function() {
//     gulp.src('js_sep/main.js')
//         .pipe(plumber())
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// gulp.task('minify-css', function() {
//     return gulp.src('css_sep/main.css')
//         .pipe(minifyCss({
//             keepSpecialComments: 1,
//             keepBreaks: true
//         }))
//         .pipe(gulp.dest('css'))
// });

// gulp.task('watch', function() {
//     gulp.watch(SRC, ['changed']);
// });


// gulp.task('default', ['jshint', 'watch']);
