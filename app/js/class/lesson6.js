//数组的扩展
{
	//Array of
	let arr = Array.of(3,4,5,6,7,8);
	console.log('arr',arr);
	
	let empty = Array.of();
	console.log(empty);
}

{
	//Array.from 将类似数组转化为数组
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);  //转化为数组
	pArr.forEach(function (item) {
		console.log(item.textContent);
	});
	
	console.log(Array.from([1,3,5],function (item) {
		return item*2
	}))
}


{
	//替换  Array.fill
	console.log([1,'a',undefined].fill(7));
	console.log([1,'a',undefined].fill(7,1,3));  //后面两个数起始位置和结束位置
}


{	//键值对
	 for(let index of ['1','c','ks'].keys()){
	    console.log('keys',index);
	  }
	for (let index of ['1','c','ks'].values()) {
		console.log('values',index);
	}
	for (let [index,value] of ['1','c','ks'].entries()) {
		console.log('values',[index,value]);
	}
}

{
	//copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
	console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
	//数组的实例  find(),findIndex()
	//find  满足一个条件就返回
	console.log([1,2,3,4,5,6,7,8].find(function (item) {
		return item>3;
	}));
	
	//当前元素的位置下标
	console.log([1,2,3,4,5,6,7,8].findIndex(function (item) {
		return item>3;
	}));
	

}


{
	//includes 是否有这个值 返回Boolean
	console.log('number',[1,2,NaN].includes(NaN));
}


/*
 * Array.of
 * Array.from
 * Array.fill
 * copyWithin
 * find()  :返回后面的数
 * findIndex():当前元素位置的下标
 * includes   
 * key()
 * value()
 * entries()
 * 
 */
