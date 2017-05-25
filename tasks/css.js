//处理css相关任务
import gulp from 'gulp';
import gulpif from 'gulp-if'; //做if判断使用
import livereload from 'gulp-livereload'; //自动刷新
import cssmin from 'gulp-minify-css';  //压缩css
import args from './util/args'; //将args参数作为依赖项加入


gulp.task('css',()=>{
	return gulp.src('app/**/*.css')
	.pipe(cssmin({
		advanced: false,   //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）
		keepBreaks: false,   //换行
		keepSpecialComments: '*'
	}))    //压缩css
	.pipe(gulp.dest('server/public'))
	.pipe(gulpif(args.watch,livereload()))
})




