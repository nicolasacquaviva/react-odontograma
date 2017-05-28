const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const reload = browserSync.reload
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const babelify = require('babelify')

gulp.task('build', () => {
  return browserify({
    entries: ['./src/app.js'],
    extensions: ['.js']
  })
  .transform(babelify.configure({
    presets: ['es2015', 'react']
  }))
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('build'))
  .pipe(reload({
    stream: true
  }))
})

gulp.task('sass', () => {
  return gulp.src('src/style.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build'))
  .pipe(reload({
    stream: true
  }))
})

gulp.task('watch', () => {
  gulp.watch('src/**/*.*', ['sass', 'build'])
})

gulp.task('serve', ['sass', 'build'], () => {
  browserSync({
    server: {
      baseDir: ['build', 'src']
    }
  })
  gulp.start('watch')
})

gulp.task('default', ['serve'])
