import gulp from 'gulp';
import gulpif from 'gulp-if'; //做if判断使用
import concat from 'gulp-concat'; //处理文件拼接
import webpack from 'webpack'; //打包
import gulpWebpack from 'webpack-stream'; //基于webpack做处理文件流
import named from 'vinyl-named'; //文件重命名标志
import livereload from 'gulp-livereload'; //自动刷新
import plumber from 'gulp-plumber'; //处理文件信息流
import rename from 'gulp-rename'; //对文件重命名
import uglify from 'gulp-uglify'; //压缩js文件
import {log,colors} from 'gulp-util'; //命令行输出包括色彩输出
import args from './util/args'; //将args参数作为依赖项加入

//创建gulp任务
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])  //指向指定位置
  //error处理
    .pipe(plumber({   
      errorHandle:function(){

      }
    }))
    .pipe(named())   //文件重新命名
    
    //文件编译
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,  //用babel处理
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{   //处理错误情况
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    //文件放置位置
    .pipe(gulp.dest('server/public/js'))  //指定编译好的路径
    
    //重命名js
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    
    //压缩处理
    .pipe(uglify({
    	compress:{properties:false},
    	output:{'quote_keys':true}
    }))
    
    //未压缩文件
    .pipe(gulp.dest('server/public/js'))
    
    //监听文件  通过if做判断,watch自动刷新
    .pipe(gulpif(args.watch,livereload()))
})
