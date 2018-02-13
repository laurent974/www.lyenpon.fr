var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'), //Autoprefixing
    cleanCss = require('gulp-clean-css'), // Minification CSS
    filter = require('gulp-filter'), //Enables you to work on a subset of the original files by filtering them using globbing
    uglify = require('gulp-uglify'), //Minifies JS
    imagemin = require('gulp-imagemin'), //Minifies images
    newer = require('gulp-newer'), //For passing through only those source files that are newer than corresponding destination files.
    rename = require('gulp-rename'), //Rename files
    concat = require('gulp-concat'), //Concat 2 JS files
    notify = require('gulp-notify'), //Error messages
    mmq = require('gulp-merge-media-queries'), //Combine Media queries
    runSequence = require('gulp-run-sequence'), //Run a series of dependent gulp tasks in order
    sass = require('gulp-sass'), //Convertion SCSS -> CSS
    plugins = require('gulp-load-plugins')({ camelsize: true}), //To automatically load in gulp plugins
    ignore = require('gulp-ignore'), //Helps with ignoring files/folders
    del = require('del'), //Helps with removing files/folders
    plumber = require('gulp-plumber'), //No stop when errors
    cache = require('gulp-cache'), //A cache proxy task for Gulp
    merge = require('merge2'), //Merge multiples files
    filter = require("gulp-filter"),
    sourcemaps = require('gulp-sourcemaps'); //Show sourcemaps on dev

gulp.task("clean", function () {
  return del("temp");
});

//Style Task
gulp.task('styles', function() {
  return gulp.src('./_app/styles/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer('last 2 version', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('.'))
    .pipe(cleanCss())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./_site/assets/'))
    .pipe(filter('**/*.css'))
    .pipe(mmq())
    .pipe(notify({ message: 'Styles Task Complete', onLast: true}));
});

//Sripts task: Vendors
gulp.task('vendorJs', function() {
  return gulp.src(['./_app/scripts/vendor/jquery.min.js','./_app/scripts/vendor/*.js'])
    .pipe(plumber())
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./_app/temp/'))
    .pipe(notify({ message: 'Vendor scripts task Complete', onLast: true}));
});

//Script task: Custom
gulp.task('customJs', function() {
  return gulp.src('./_app/temp/*.js')
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./_app/temp/'))
    .pipe(notify({ message: 'Custom scripts task Complete', onLast: true}));
});

//Script tack: merge js files
gulp.task('scripts', ['vendorJs', 'customJs'], function() {
    // Get your js
    var customJs = gulp.src('./_app/temp/scripts.js')

    // Get vendor js
    var vendorJs = gulp.src('./_app/temp/vendors.js')

    return merge(customJs, vendorJs)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./_site/assets/'))
        .pipe(notify({ message: 'Concat js files task Complete', onLast: true}));
});

gulp.task("complete-build", ["scripts"], function(){
  return del(['./_app/temp/**']);
});

//Watch task
gulp.task('default', ['styles', 'vendorJs', 'customJs', 'complete-build'], function() {
  //gulp.watch('./app/img/raw/**/*', ['images']);
  gulp.watch('./_app/styles/**/*.scss', ['styles']);
  gulp.watch('./_app/scripts/**/*.js', ['customJs', 'complete-build']);
  gulp.watch('./_app/scripts/vendor/*.js', ['vendorJs', 'complete-build']);
});
