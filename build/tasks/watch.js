var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.source, ['watch-system']).on('change', reportChange);
  gulp.watch(paths.html, ['watch-html']).on('change', reportChange);
  gulp.watch(paths.rawStyles, ['build-styles']).on('change', reportChange);
});

gulp.task('watch-system', ['build-system'], function() {
  return browserSync.reload();
});
gulp.task('watch-html', ['build-html'], function() {
  return browserSync.reload();
});
