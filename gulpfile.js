const gulp = require('gulp')
const webpack = require('gulp-webpack')
const clean = require('gulp-clean')
const copy = require('gulp-copy')
const uglify = require('gulp-uglify')
const moment = require('moment')
const header = require('gulp-header')
const cleanCSS = require('gulp-clean-css');
const zip = require('gulp-zip')
const sequence = require('gulp-sequence')

var entry = require('./package').entry

var src = []
var dist = []

for (var key in entry) {
    src.push(entry[key])
    dist.push('./dist/web/dist/js/' + key + '.js')
}

var year = moment().format('YYYY')
var date = moment().format('YYYY-MM-DD')
var time = moment().format('MMDDHHmm')

// 清理dist目录
gulp.task('clean:init', () => {
    return gulp.src('dist', {
        base: '.'
    })
        .pipe(clean())
        .pipe(gulp.dest('.'))
})

// 拷贝源代码至dist目录
gulp.task('copy:src', () => {
    return gulp.src(['web/**/*'], {
        base: '.'
    })
        .pipe(gulp.dest('dist/'))
})

// 清理web/dist目录
gulp.task('clean:dist', () => {
    return gulp.src(['dist/web/dist'])
        .pipe(clean())
})

// webpack构建
gulp.task('webpack:dist', () => {
    return gulp.src(src, {
        base: './dist'
    })
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('./dist/web/dist'))
})

// 压缩webpack构建好的js
gulp.task('compress:js', () => {
    return gulp.src(dist)
        .pipe(uglify())
        .pipe(header('/*! jss ' + date + ' (c) 2014 - ' + year + ' */\n'))
        .pipe(gulp.dest('dist/web/dist/js'))
})

// 压缩输出的css文件
gulp.task('compress:css', () => {
    return gulp.src('./dist/web/dist/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie9' }))
        .pipe(gulp.dest('./dist/web/dist/css/'))
})

// 清理不需要的开发阶段的文件
gulp.task('clean:tmp', () => {
    return gulp.src(['dist/web/src', 'dist/web/**/*.map', 'dist/webpack.config.js'])
        .pipe(clean())
})

// 打成zip包
gulp.task('zip:dist', () => {
    return gulp.src('dist/**/*')
        .pipe(zip('lark-' + time + '.zip'))
        .pipe(gulp.dest('dist'))
})

// 顺序执行任务
gulp.task('build', () => {
    process.env.NODE_ENV = 'production'
    sequence('clean:init', 'copy:src', 'clean:dist', 'webpack:dist', 'compress:js', 'compress:css', 'clean:tmp', 'zip:dist')()
})