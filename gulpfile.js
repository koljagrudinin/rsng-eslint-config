var gulp = require('gulp');
const eslint = require('gulp-eslint');
const debug = require('gulp-debug');


var items = [
    // "1.10.js", //неизвестное правило
    "1.14.js",
    // "1.18.js",
    // "1.22.js",
    // "1.26.js",
    // "1.34.js", //one-var
    // "1.38.js", //dot-notation
    // "1.42.js", //quotes
    // "1.46.js", //no-array-constructor
    // "1.68.js",
    // "1.8.js", //strict
    // "1.11.js",
    // "1.15.js",
    // "1.19.js",
    // "1.23.js",
    // "1.27.js",
    // "1.31.js",
    // "1.35.js",
    // "1.39.js",
    // "1.43.js",
    // "1.47.js",
    // "1.65.js",
    // "1.69.js",
    // "1.9.js",
    // "1.12.js",
    // "1.16.js",
    // "1.20.js",
    // "1.24.js",
    // "1.28.js",
    // "1.32.js",
    // "1.36.js",
    // "1.40.js",
    // "1.44.js",
    // "1.48.js",
    // "1.66.js",
    // "1.7.js",
    // "1.js",
    // "1.13.js",
    // "1.17.js",
    // "1.21.js",
    // "1.25.js",
    // "1.29.js",
    // "1.33.js",
    // "1.37.js",
    // "1.41.js",
    // "1.45.js",
    // "1.49.js",
    // "1.67.js",
    // "1.70.js",
    // "11.js",
]
{
    for (var i = 0; i < items.length; i++) {
        items[i] = 'errors/' + items[i];
    }
}

gulp.task('scripts', function () {
    gulp.src(items)
        .pipe(debug())
        .pipe(eslint({
            rules: {
                // "indent": 0,
                // "no-console": 0,
                // "comma-dangle": 0,
                // "spaced-comment": 0,
                // "no-trailing-spaces": 0,
                // "no-use-before-define": 0,
                // "wrap-iife": 0,
                // "func-names": 0,
                // "no-shadow": 0,
                // "strict": 0,
                // "lines-around-directive": 0,
                // "no-unused-vars": 0,
                // "no-var": 0,
                // "prefer-arrow-callback": 0,
                // "no-redeclare": 0,
                // "eol-last": 0,
                // "no-undef": 0,
                // "prefer-template": 0,
                // "semi": 0,
                // "max-len": 0
            }
        }))
        .pipe(eslint.format());
});

gulp.task('default', ['watch']);

gulp.task('watch', function () {
    gulp.watch('init.js', ['scripts']);
});