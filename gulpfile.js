const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// compile scss into css
function style() {
	// 1. find scss
	return gulp.src('./scss/**/*.scss')
	// 2. compile sass
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('style.css'))
		// 3. where do I save the compiled CSS?
		.pipe(gulp.dest('./css/'))
		// 4. stream changes to all browsers
		.pipe(browserSync.stream());
}

// concat js
function javascript(){
// gulp.task('javascript', function() {
  return gulp.src('./js/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('script.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'));
// });
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', javascript);
}

exports.style = style;
exports.watch = watch;
