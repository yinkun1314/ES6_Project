//symbol :数据类型   提供一个独一无二的值
{
	//声明
	let a1 = Symbol();
	let a2 = Symbol();
	console.log(a1 === a2);
	
	let a3 = Symbol.for('a3');  //key值  检查机制
	let a4 = Symbol.for('a3');
	console.log(a3 === a4);
}


{
	let a1 = Symbol.for('abc');
	let obj={
		[a1]:'123',
		'abc':345,
		'c':456
	};
	console.log('obj',obj)
	
//	Object.getOwnPropertySymbols()   取api上的所有属性值
Object.getOwnPropertySymbols(obj).forEach(function (item) {
	console.log(obj[item]);
})

//取到一个对象的所有属性
Reflect.ownKeys(obj).forEach(function (item) {
	console.log('ownkeys',item,obj[item])
})



	
}
