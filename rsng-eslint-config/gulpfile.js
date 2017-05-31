var gulp = require('gulp');
const eslint = require('gulp-eslint');
const debug = require('gulp-debug');
var filesExist = require('files-exist');

var items = [
  // "activate_init.js",
  // "angular_components_call_yourself.js",
  // "angular_controllers.js",
  // "angular_one_component_per_file.js",
  // "array_push.js",
  // "array_slice_clone.js",
  // "array_slice_convert.js",
  "cache_jquery_selectors.js",
  // "catch_promises.js",
  // "create_arrays_using_square_brackets.js",
  // "do_not_override_props.js",
  // "do_not_reuse_controllers.js",
  // "do_not_use_default_words.js",
  // "do_not_use_delete.js",
  // "do_not_use_functions_without_names.js",
  // "do_not_use_promise_success_or_error.js",
  // "eof.js",
  // "file_structure.js",
  //"function_declaration.js",
  //"literate.js",
  //"naming.js",
  //"naming_feature.type.js",
  //"no_hanging_commas.js",
  //"no_leading_commas.js",
  //"not_use_param_with_name_arguments.js",
  //"one-var.js",
  //"pascalCase.js",
  //"return_this.js",
  //"semicolon.js",
  //"single_quotes.js",
  //"spaces_after_first_bracket.js",
  //"spaces_with_if_while.js",
  //"spaces_with_operators.js",
  //"str-len.js",
  //"use_brackets_for_multiline_block.js",
  //"use_dollar_for_jquery_objects.js",
  //"use_dollar_symbol.js",
  //"use_fabrics_and_services.js",
  //"use_function_expression.js",
  //"use_hasOwnProperty.js",
  //"use_line_breaks_for_long_chain_calls.js",
  //"use_point.js",
  //"use_square_brackets.js",
  //"use_strict.js",
  //"use_strict_comparison.js",
  //"use_var.js",
  //"var_must_be_at_top.js",
];

{
  for (var i = 0; i < items.length; i++) {
    items[i] = 'errors/' + items[i];
  }
}


gulp.task('scripts', function () {
  gulp.src(filesExist(items))
    .pipe(eslint({
     
      rules: {
        //"indent": 0,
        "no-console": 0,
        //"comma-dangle": 0,
        "spaced-comment": 0,
        //"no-trailing-spaces": 0,
        //"no-use-before-define": 0,
        //"wrap-iife": 0,
        //"func-names": 0,
        //"no-shadow": 0,
        //"strict": 0,
        //"lines-around-directive": 0,
        //"no-unused-vars": 0,
        //"no-var": 0,
        //"prefer-arrow-callback": 0,
        //"no-redeclare": 0,
        //"eol-last": 0,
        //"no-undef": 0,
        //"prefer-template": 0,
        //"semi": 0,
        //"max-len": 0
      },
      "globals": ["$q", "logger", "$http", "$"]
    }))
    .pipe(eslint.format());
});

gulp.task('default', ['watch']);

gulp.task('watch', function () {
  gulp.watch('init.js', ['scripts']);
});