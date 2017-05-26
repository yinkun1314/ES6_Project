//处理server相关任务
import gulp from 'gulp';
import gulpif from 'gulp-if'; //做if判断使用
import liveserver from 'gulp-live-server';  //启动服务器
import livereload from 'gulp-livereload'; //自动刷新
import args from './util/args'; //将args参数作为依赖项加入

gulp.task('serve',(cb)=>{
	if(!args.watch) return cb();
	
	//服务器启动
	var server = liveserver.new(['--harmony','server/bin/www']);
 	server.start();
 	//监听server下面的js ejs自动更新
 	gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    	server.notify.apply(server,[file]);  //通知服务器做出命令
	})
	//接口路由变化重启服务器
	gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
	    server.start.bind(server)()
	});
	
	
	
	
	
	
 	
})
