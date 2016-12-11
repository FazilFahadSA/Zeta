var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

//Script Task

gulp.task('scripts', function() {
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});


//Style Task

gulp.task('styles', function() {
    gulp.src('scss/main.scss')
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(gulp.dest('build/css'))
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
    gulp.watch('scss/main.scss', ['styles']);
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
