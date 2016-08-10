var gulp = require('gulp'),
	clean = require('gulp-clean'), // Remove files and folders
	connect = require('gulp-connect'), // Run a webserver with livereload on default port:8080
	sass = require('gulp-sass'), // Compile Sass
	autoprefixer = require('gulp-autoprefixer'), // Prefix CSS
	cssmin = require('gulp-clean-css'), // Minify CSS
	usemin = require('gulp-usemin'), // Replaces references to scripts or stylesheets in HTML
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	ngannotate = require('gulp-ng-annotate'); //ng-annotate adds and removes AngularJS dependency injection annotations

var path = {
	root: './build/',
	build: './build/**/*',
	index: './app/index.html',
	scss: './app/scss/*.scss', 
	css: '.app/css/*.css',
	copy: [
		'./app/views/**/*.html',
		'./app/scripts/**/*.json',
		'!./app/index.html'
	]
};

gulp.task('server', function() { //OK
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('clean', function () { //OK
	return gulp.src(path.build, {read: false})
		.pipe(clean());
});

gulp.task('sass', ['clean'], function () { //OK
  return gulp.src(path.scss)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 20%'],
      cascade: false
    }))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('copy', ['sass'], function() { //OK
  gulp.src( './app/views/**/*.html')
    .pipe( gulp.dest('./build/views/'));
  gulp.src( './app/scripts/**/*.json')
    .pipe( gulp.dest('./build/scripts/'));  
});

gulp.task('usemin', ['copy'], function() { //OK
  return gulp.src(path.index)
    .pipe(usemin({
      css: [ cssmin() ],
      html: [ htmlmin() ],
      js: [ ngannotate({single_quotes: true}), uglify() ]
      // inlinejs: [ uglify() ],
      // inlinecss: [ cssmin(), 'concat' ]
    }))
    .pipe(gulp.dest('build/'));
    // .pipe(connect.reload());
});

gulp.task('reload', ['sass'], function() {
  gulp.src('./app/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', ['sass'], function() { //OK
  gulp.watch('./app/**/*', ['reload']);
});

gulp.task('default', ['server', 'watch']);
gulp.task('build', ['usemin']);
