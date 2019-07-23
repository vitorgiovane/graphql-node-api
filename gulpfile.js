const gulp = require("gulp")
const clean = require("gulp-clean")
const ts = require("gulp-typescript")

const compileTsFiles = () => {
  const tsProject = ts.createProject("tsconfig.json")
  const tsResult = tsProject.src().pipe(tsProject())
  return tsResult.js.pipe(gulp.dest("dist"))
}
gulp.task("scripts", compileTsFiles)

const reflectJsonFiles = () => {
  return gulp.src(["src/**/*.json"]).pipe(gulp.dest("dist"))
}
gulp.task("static", reflectJsonFiles)

const cleanDistFolder = () => {
  return gulp.src("dist", { read: false, allowEmpty: true }).pipe(clean())
}
gulp.task("clean", cleanDistFolder)

function watchFiles() {
  gulp.watch("src/**/*.ts", compileTsFiles)
  gulp.watch("src/**/*.json").on("change", reflectJsonFiles)
}
gulp.task("watch", watchFiles)

gulp.task("default", gulp.series("clean", "static", "scripts"))
