//函数扩展
{
	function test(x,y='world') {
		console.log('默认值',x,y)
	}
	test('hello');
	test('hello','kill')
}


{
	//z作用域
	let x ='test';
	function test2 (x,y=x) {
		console.log('作用域',x,y);
	}
	test2();
	test2('kill')   //kill kill
}


{
	//rest函数  转换为数组  类似anguments
	function test3 (...arg) {
		for (let v of arg) {
			console.log(v);
		}
	}
	test3(1,23,4,5,667,8,'a');
}



{
	//数组转换为离散值
	console.log(...[1,2,4]);
}


{
	//箭头函数
	let arrow = v =>v*2;   //参数  retrun值
	console.log(arrow(3));
	
	let arrow2 = ()=>5;
	console.log(arrow2());
	/*
	 * 使用箭头函数注意:  以下三个变量在箭头函数中是不存在的
	 * arguments super new.target;
	 */
}


{
	//尾部优化   提升性能
	function tail (x) {
		console.log('tail',x);
	}
	
	function fx (x) {
		return tail(x);
	}
	fx(123);  
	
	
}



