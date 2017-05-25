//module
//export:规定模块对外的接口
//import:输入其他模块提供的功能
/*
	//对外提供一个变量
	export let A =123;
	
	//导出一个函数
	export function test(){
		console.log('test');
	}
	//导出一个类
	export class hello{
		test(){
			console.log('class');
		}
	}
*/

let A =123;
let test = function () {
	console.log('test');
}
class Hello{
	test(){
		console.log('test');
	}
}


export default{    //可以任意在import中取名称
	A,
	test,
	Hello
}


/*

//import {A,test,hello}  from './class/lesson18';
//console.log(A,test,hello)


//import {A}  from './class/lesson18';
//console.log(A)


import *as lesson from './class/lesson18';    //*as   导出所有
console.log(lesson.A,lesson.test)

import  lesson17 from './class/lesson18';
console.log(lesson17.A);
*/
