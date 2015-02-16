/**
 * Created by Meki on 2015.02.16..
 */

var gulp    = require('gulp');
var uglify  = require('gulp-uglify');
var del     = require('del');

gulp.task('clean', function() {
    del(['jquery.foggy.min.js']);
});

gulp.task('default', ['clean'], function() {
    gulp.src('./jquery.foggy.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
});