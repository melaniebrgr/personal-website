var gulp = require('gulp'),
	clean = require('gulp-clean'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-clean-css'),
	usemin = require('gulp-usemin'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	ngannotate = require('gulp-ng-annotate'),
  gulpSequence = require('gulp-sequence'); 

var path = {
	root: './',
	build: './build/**/*',
	index: './app/index.html',
	scss: './app/sass/**/*.scss', 
	css: './app/css/',
	copySass: [
		'./app/bower_components/normalize-scss/sass/**/*.scss',
    './app/bower_components/meyer-reset/stylesheets/_meyer-reset.scss'
	]
};

gulp.task('server', function() {
  connect.server({
    root: path.root,
    livereload: true
  });
});

gulp.task('clean', function () {
	return gulp.src(path.build, {read: false})
		.pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src(path.scss)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 20%'],
      cascade: false
    }))
    .pipe(gulp.dest(path.css));
});

gulp.task('copy', function() {
  gulp.src('./app/views/**/*.html')
    .pipe( gulp.dest('./build/views/'));
  // gulp.src( './app/scripts/**/*.json')
  //   .pipe( gulp.dest('./build/scripts/'));  
});

gulp.task('copySass', function() {
  gulp.src( path.copySass)
    .pipe( gulp.dest('./app/sass/'));
});

gulp.task('usemin', function() {
  return gulp.src(path.index)
    .pipe(usemin({
      css: [ cssmin() ],
      html: [ htmlmin() ],
      js: [ ngannotate({single_quotes: true}), uglify() ]
      // inlinejs: [ uglify() ],
      // inlinecss: [ cssmin(), 'concat' ]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('reload', function() {
  gulp.src('./app/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch( path.scss, ['sass'])
  gulp.watch( './app/**/*', ['reload']);
});

gulp.task('default', gulpSequence( 'copySass', 'sass', 'server', 'reload', 'watch'));
// gulp.tast('build', gulpSequence( 'clean', 'sass', 'copy', 'usemin'));
