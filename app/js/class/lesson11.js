//数据结构 对比
{
	//数据结构对比增删改查
	let map =new Map();
	let array =[];
	//增
	map.set('t',1);
	array.push({t:1});
	console.log('map-array',map,array);
	
	
	//查
	let map_exist = map.has('t');
	let array_exist = array.find(item=>item.t);
	console.log('map-array',map_exist,array_exist);
	
	//改
	map.set('t',2);
	array.forEach(item=>item.t?item.t=2:'');
	console.log('map-array-modify',map,array);
	
	//删
	map.delete('t');
	let index = array.findIndex(item=>item.t);   //查找元素中带t的元素
	array.splice(index,1);
	console.log('map-array-empty',map,array);
	
	
}


{
	//set和数组数据结构对比
	let set = new Set();
	let array=[];
	
	//增
	set.add({t:1});
	array.push({t:1});
	console.info('set-array',set,array);
	
	//查
	let set_exit = set.has({t:1});   //false  要被保存过 才能返回true
	let array_exit = array.find(item=>item.t)
	console.info('set-array',set_exit,array_exit);
	
	//改
	set.forEach(item=>item.t?item.t=2:'');
	array.forEach(item=>item.t?item.t=2:'');
	console.log('set-array',set,array);
	
	
	//删
	set.forEach(item=>item.t?set.delete(item):'');
	let index = array.findIndex(item=>item.t);
	array.splice(index,1);
	console.log('set-array-emtpy',set,array);
	
}

console.log('**************************************************************');
{
	//map set object 对比
	let item ={t:1};
	let map = new Map();
	let set = new Set();
	let obj = {}

	//增
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;
	console.log('map-set-obj',obj,map,set);
	
	
	//查
	console.info({
		map_exist:map.has('t'),
		set_exist:set.has(item),
		obj_exist:'t' in obj
	})
	
	
	//改
	map.set('t',2);
	item.t = 2 ;  //使用set时 是对数据的直接变化   //要不遍历
	obj['t'] = 2;
	console.log('map-set-obj',obj,map,set);
	
	
	//删
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.log('map-set-obj',obj,map,set);
	
	
}

/*
 * 能使用map不使用数组
 * 如果对数据要求高  要使用set  放弃使用object
 */










