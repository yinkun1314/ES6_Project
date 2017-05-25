import yargs from 'yargs';    //引用yargs模块

//定义开发环境
const args = yargs

	.option('production',{   //区分 是否有参数
		boolean:true,
		default:false,
		describe:'min all scripts'
	})
	
	.option('watch',{    //添加监控项 监听文件的修改
		boolean:true,
		default:false,
		describe:'watch all false'
	})
	
	.option('verbose',{  //详细输出命令行的日志
		boolean:true,
		default:false,
		describe:'watch all log'
	})

	.option('sourcemaps',{  //强制生成 处理命令行参数
		describe:'sourcemaps'
	})
	
	.option('port',{  //服务器生成的端口
		string:true,
		default:8080,
		describe:'server port'
	})
	
	.argv //输出的命令行以字符串作为解析

export default args;





