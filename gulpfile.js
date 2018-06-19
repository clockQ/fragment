// 获取 gulp
var gulp = require('gulp');
// 获取 minify-css 模块（用于压缩 CSS）
var minifycss = require('gulp-minify-css');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');

// Js语法检查
gulp.task('jshint', function() {
  return gulp.src('cnblog/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});

// 压缩 css 文件
gulp.task('minifycss', function () {
    return gulp.src('cnblog/*.css')
            .pipe(rename({suffix:'.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest('output'));
});

// 压缩 js 文件
gulp.task('minifyjs', function () {
    return gulp.src('cnblog/*.js')
            .pipe(rename({suffix:'.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('output'));
});

// cmd中输入gulp执行下面函数
gulp.task('default', ['jshint'], function(){
    gulp.start('minifycss', 'minifyjs');
});
