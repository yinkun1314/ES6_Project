{
	//简洁表达
	let o =1;
	let k = 2;
	let es5={
		o:o,
		k:k
	};
	let es6={
		o,k
	};
	console.log(es5,es6);
}

{
	//对象有方法
	let es5_method={
		hello:function () {
			console.log('hello');
		}
	}
	let es6_method={
		hello(){
			console.log('hello');
		}
	}
	console.log(es5_method.hello(),es6_method.hello());
}


{
	//属性表达式
	let a ='b';
	let es5_obj={
		a:'c'
	};
	let es6_obj={
		[a]:'c'   //b:c  
	}
	console.log(es5_obj,es6_obj);
	
}

{
	//新增API
	console.log('字符串',Object.is('abc','abc'));   //  ===
}


{
	//拷贝  Object assign
	console.log('拷贝',Object.assign({a:'a'},{b:'b'}));
	
	//对象遍历
	let test={k:123,o:456};
	  for(let [key,value] of Object.entries(test)){
	    console.log([key,value]);
	  }
}



{
	//扩展运算符
//	...rest
//	let {a,b,...c}={a:'test',b:'kill',c'ddd',d:'cccc'};
//	c={
//		c:'ddd'
//		d:'ccccc'
//	}
}
