//Decorator
{
	//修饰器 是一个函数
	//修改行为    (扩展类的功能)
	//修改类的行为 (只能在类的行为中应用)
}


{
	//限制某个属性是只读的
	let readonly = function (target,name,descriptor) {   //修改类的本身   修改属性的名称  该属性的描述对象
		descriptor.writable = false;
		return descriptor;
	};
	
	class Test{
		@readonly   //修饰器   类的本身功能进行修改
		time(){
			return '2017-03-11'
		}
	}
	
	let test = new Test();
	
	//修改time属性
//	test.time =function () {
//		
//	}
	
	console.log(test.time());
	
}



{
	let typename =function (target,name,descriptor) {
		target.myname ='hello';
	}
	
	@typename
	class Test{
		
	}
	
	console.log('类的修饰符',Test.myname);
}


{
//	第三方修饰库   core-decorators; v  npm install core-decorators
}



{	
	//埋点  统计用户的行为  日志系统
	let log =(type)=>{
		return function (target,name,descriptor) {
			let src_method = descriptor.value;
			descriptor.value =(...arg)=>{
				src_method.apply(target,arg);
				console.log(`log ${type}`);   //new img.src=...
			}
		}
	}
	
	class AD{
		@log('show')
		show(){
			console.info('ad is show');
		}
		@log('click')
		click(){
			console.info('ad is click');
		}
	}
	
	let ad = new AD();
	ad.show();
	ad.click();
	
}

