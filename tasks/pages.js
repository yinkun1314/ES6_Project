//处理模板文件
import gulp from 'gulp';
import gulpif from 'gulp-if'; //做if判断使用
import livereload from 'gulp-livereload'; //自动刷新
import args from './util/args'; //将args参数作为依赖项加入

gulp.task('pages',()=>{
	return gulp.src('app/**/*.ejs')
	.pipe(gulp.dest('server'))
	.pipe(gulpif(args.watch,livereload()));
})

//gulp.src  :gulp的指定路径

