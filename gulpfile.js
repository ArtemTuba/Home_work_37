import gulp from 'gulp';
import uglify from 'gulp-uglify';
import sass from 'sass';
import gulpSass from 'gulp-sass';
const scss = gulpSass(sass);

const DIST_DIR = './dist/';
const JS_DIR = './main.js';
const SCSS_DIR = './style.scss';

async function def() {
    gulp.src(JS_DIR)
        .pipe(uglify())
        .pipe(gulp.dest(DIST_DIR))
}

async function sassCompilation(){
    gulp.src(SCSS_DIR)
        .pipe(scss())
        .pipe(gulp.dest(DIST_DIR))
}
gulp.task('sass-compilation', sassCompilation);
gulp.task('default', def);
