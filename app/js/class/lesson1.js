'use strict';
function test() {
	//在块级定义
//	for (let i = 1;i<3;i++) {   //在自己的快级作用域生效
//		console.log(i);
//	}
//	console.log(i);  //es6强制开启严格模式
	let a =1;
	let b =2;
}

function last () {
	const PI = 3.1415926;   //const声明常量不可修改

	
	const k={
		a:1
	}
	k.b=3;
	console.log(PI,k);
}




//test();
last();
