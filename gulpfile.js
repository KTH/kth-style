/* eslint-disable no-console */

'use strict'

const gulp = require('gulp')
const mergeStream = require('merge-stream')
const header = require('gulp-header')
const cleanCSS = require('gulp-clean-css')
const gulpLoadPlugins = require('gulp-load-plugins')
const zip = require('gulp-zip')
const uglify = require('gulp-uglify')
const $ = gulpLoadPlugins()

const globals = {
  dirname: __dirname,
}

const { webpack, moveResources, vendor, clean } = require('kth-node-build-commons').tasks(globals)

/**
 * Usage:
 *
 *  One-time build of browser dependencies for development
 *
 *    $ gulp build:dev [--production | --development]
 *
 *  Deployment build
 *
 *    $ gulp build
 *
 *  Continuous re-build during development
 *
 *    $ gulp watch
 *
 *  Remove the generated files
 *
 *    $ gulp clean
 *
 */

// *** JavaScript helper tasks ***
gulp.task('webpack', done => {
  webpack()
  done()
})
gulp.task('vendor', done => {
  vendor()
  done()
})

gulp.task(
  'moveResources',
  gulp.series(() => {
    // Returning merged streams at the end so Gulp knows when async operations have finished
    moveResources.cleanKthStyle()

    return mergeStream(
      moveResources.moveKthStyle(),
      moveResources.moveBootstrap(),
      moveResources.moveFontAwesome(),
      // Move project image files
      gulp.src('./public/img/**/*').pipe(gulp.dest('dist/img'))
    )
  })
)

const distRootFolderName = 'dist'

// Information about KTH Style in the head of CSS file
const pkg = require('./package.json')
const banner = `/*!
  * ${pkg.name}  - ${pkg.description}
  * @version v${pkg.version}
  * @link ${pkg.repository.uri}
  */`

gulp
  .src('./foo/*.js')
  .pipe(header(banner, { pkg }))
  .pipe(gulp.dest('./dist/'))

// var inliner = require('sass-inline-svg')

gulp.task(
  'createDist',
  gulp.series(() => {
    return mergeStream(
      gulp
        .src('./public/sass/kth-bootstrap.scss')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({ includePaths: ['node_modules/bootstrap/scss'] }).on('error', $.sass.logError))
        // .pipe($.sass({includePaths: ['node_modules/bootstrap/scss'], functions: { svg: inliner('./', []) }}).on('error', $.sass.logError))
        .pipe($.autoprefixer({ browsers: ['last 4 versions'] }))
        .pipe(header(banner, { pkg }))
        .pipe(gulp.dest(`./${distRootFolderName}/css`))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(cleanCSS({ level: 2 }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(`./${distRootFolderName}/css`)),
      gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest(`./${distRootFolderName}/js`)),
      gulp
        .src(['./public/js/*.js', '!./public/js/vendor.js', '!./public/js/*.min.js'])
        .pipe(uglify())
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest(`./${distRootFolderName}/js`))
    )
  })
)

gulp.task(
  'distFonts',
  gulp.series(() => {
    return mergeStream(gulp.src('./public/fonts/fontello/font/*.*').pipe(gulp.dest(`./${distRootFolderName}/font`)))
  })
)

gulp.task(
  'distImagesAndIcons',
  gulp.series(() => {
    return gulp.src('./public/img/**/*.*').pipe(gulp.dest(`./${distRootFolderName}/img`))
  })
)

gulp.task(
  'distScssZip',
  gulp.series(['distImagesAndIcons'], () => {
    // Note: The "unneccessary" globbing for node_modules and img is to
    // make those directory names part of the paths as used in the zip.
    // Anything before the first segment cotaining a star is considered
    // the glob base and not used as a file name in the zip.
    return gulp
      .src(['./node_module*/**/*.scss', './public/sass/**/*.scss', `./${distRootFolderName}/im*/**`])
      .pipe(zip('kth-style-scss.zip'))
      .pipe(gulp.dest(`./${distRootFolderName}/`))
  })
)

/* Main entry points */

gulp.task('clean', done => {
  clean()
  done()
})

gulp.task(
  'build',
  gulp.series(['clean', 'createDist', 'distFonts', 'distImagesAndIcons', 'distScssZip'], done => {
    console.log('*** Done creating distribution ***')
    done()
  })
)

// Listen for changes and re-dist
gulp.task(
  'watch',
  gulp.parallel(done => {
    return gulp.watch(
      ['public/sass/**/*.scss', 'public/css/**/*.scss', 'public/fonts/**/*.*', 'public/js/*.js'],
      ['build'],
      done()
    )
  })
)
