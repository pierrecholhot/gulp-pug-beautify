'use strict';

var gulp = require('gulp');
var pugBeautify = require('./');

gulp.task('default', function () {
	return gulp.src('fixtures/*.jade')
    .pipe(pugBeautify({omit_empty_lines: true}))
    .pipe(gulp.dest('dist'));
});
