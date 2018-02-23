const gulp = require('gulp')
const sass = require('gulp-sass')
const srcmap = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const rename = require('gulp-rename')
const minifyCSS = require('gulp-csso')
const mocha = require('gulp-mocha')


gulp.task('clean', () => {
  del.sync(['./lib/**/*'])
})

gulp.task('css', () => {
  return gulp.src('./src/index.scss')
    .pipe(rename('post.css'))
    .pipe(srcmap.init())
      .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['> 0% in CN', 'IE >= 8']
      }))
    .pipe(srcmap.write('./'))
    .pipe(gulp.dest('./lib'))
    .pipe(gulp.dest('./examples'))
})

gulp.task('minifyCSS', () => {
  return gulp.src('./lib/post.css')
    .pipe(minifyCSS({
      restructure: false,
      sourceMap: true
    }))
    .pipe(rename('post.min.css'))
    .pipe(gulp.dest('./lib'))
})

// dev
gulp.task('dev', () => {
  return gulp.watch('./src/**/*.scss', ['css'])
})

// test
gulp.task('test', () => {
  return gulp.src('./test/index.js')
    .pipe(mocha({
      reporter: 'spec'
    }))
})