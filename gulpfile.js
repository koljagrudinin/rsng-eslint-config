var gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('scripts', function(){
    gulp.src('init.js')
    .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch('init.js', ['scripts']);
});