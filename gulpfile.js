const {src, dest, parallel} = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const minifyCss = require('gulp-uglifycss');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const cssImport = require('gulp-cssimport');

function base() {
    //copiar o arquivo index.html e jogar no public
    return src('src/templates/*.html')
    .pipe(dest('public/'));  
}
function javascript() {
    return src('src/js/*.js')
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(minifyJs())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('public/assets/js/'));
};
function css() {
    return src('src/css/*.css')
    .pipe(cssImport())
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('public/assets/css/'));
};

exports.default = parallel(base, javascript, css);