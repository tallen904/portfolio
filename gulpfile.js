const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");

gulp.task("sass", function() {
  return gulp
    .src("./public/sass/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "public"
    }
  });
});

gulp.task("default", ["browserSync", "sass"], function() {
  gulp.watch("./public/sass/**/*.scss", ["sass"]);
  gulp.watch("./public/*.html", browserSync.reload);
  gulp.watch("./public/js/**/*.js", browserSync.reload);
});
