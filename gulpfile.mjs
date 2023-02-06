import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass'
import gulpSourcemaps from 'gulp-sourcemaps'
import gulpAutoprefixer from 'gulp-autoprefixer'
import gulpRename from 'gulp-rename'
import gulpCsso from 'gulp-csso'
import { deleteAsync } from 'del';

const sass = gulpSass(dartSass)

const paths = {
  src: 'src/index.scss',
  dest: 'lib/'
};

export function clean() {
  return deleteAsync(['lib/**'])
}

export function cleanDist() {
  return deleteAsync(['dist/**'])
}

export function buildStyle() {
  return gulp.src(paths.src)
    .pipe(gulpSourcemaps.init())
      .pipe(sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError))
      .pipe(gulpAutoprefixer())
    .pipe(gulpSourcemaps.write('./'))
    .pipe(gulpRename('post.css'))
    .pipe(gulp.dest(paths.dest))
}

export function minifyStyle() {
  return buildStyle().pipe(gulpCsso({
    restructure: false,
    sourceMap: true
  }))
  .pipe(gulpRename('post.min.css'))
  .pipe(gulp.dest(paths.dest))
}


export function dev() {
  return gulp.watch('src/**/*.scss', buildStyle)
}


export default minifyStyle;