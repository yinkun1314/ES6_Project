//数据结构  set 不重复
{
	let list = new Set();
	list.add(5);
	list.add(7);
	
	
	console.log('size',list.size);
	
	
}

{
	let arr =[1,2,3,4,5];
	let list=new Set(arr);
	console.log('size',list.size);
}


{
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(2);
	console.log(list);   //不生效重复元素  去重
	
	
	let arr = [1,2,3,21,1,3,4,2,1,'2'];
	let list2 = new Set(arr);
	console.log(list2);  //不会改变数据类型
}

{
	let arr =['add','delete','clear','has'];
	let list = new Set(arr);
	console.log('has',list.has('add'));   //true   是否含有
	console.log('delete',list.delete('add'),list);   //delete操作
	list.clear();   //清空操作
	console.log('list',list);    
}

{
	//遍历
	let arr =['add','delete','clear','has'];
	let list = new Set(arr);
	
	for (let key of list.keys()) {
		console.log('keys',key);
	}
	for (let values of list.values()) {
		console.log('values',values);
	}
	for (let values of list) {    //返回的就是values;
		console.log('list',values);
	}
	for (let [key,value] of list.entries()) {
		console.log('entries',[key,value]);
	}
}

{
	console.log('**************************************');
	//for each
	let arr =['add','delete','clear','has'];
	let list = new Set(arr);
	list.forEach(function (item) {
		console.log(item);
	})
}


{
	//weakSet  作为参数传进去的一定是一个对象   是对数组成员的弱引用     最大的用处  储存Dom节点
	let weakList = new WeakSet();
	
	let arg = {};
	
	weakList.add(arg);   //只能添加对象
	
//	weakList.add(2);   //typeError
	
	console.log('weakSet',weakList)
}



{
	//map
	let map = new Map();  //key value  key可以是任何属性
	let arr =['123'];
	map.set(arr,456);
	console.log('map',map,map.get());    //map.get:获取值
}

{
	let map = new Map([
		['a',123],
		['b',456]
	]);
	console.log(map);
	
	console.log('size',map.size);
	console.log('delete',map.delete('a'),map);
	console.log('clean',map.clear(),map);
}



{
	//weakMap  接受的值是对象   
	let weakmap = new WeakMap();
	let o={};
	weakmap.set(o,123);
	console.log('weakmap',weakmap.get(o));
}




















