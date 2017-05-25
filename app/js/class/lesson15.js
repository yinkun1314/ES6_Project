//iterator 接口
//iterator  中的for of
{
	let arr = [1,2,3,4,5,6,7,8,9];
	let map = arr[Symbol.iterator]();    //调用iterator接口
	console.log(map.next());   //value  done   循环结束done为true;
	
}



{
	//object 部署Iterator接口
	//自定义部署Iterator接口
	let obj={
		start:[1,3,2],
		end:[7,9,8],
		[Symbol.iterator](){     //es6定义的方法  部署接口
			let self=this;
			let index = 0;
			let arr = self.start.concat(self.end);
			let len = arr.length;
			return {
				next(){
					if(index<len){
						return {
							value:arr[index++],
							done:false
						}
					}else{
						return {
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}
	
	for (let key of obj) {
		console.log(key);
	}
	
}

//{
//	//调用数组的Symbol.iterator接口
//	let obj = {
//		start:[1,2,3],
//		end:[7,9,8],
//		[Symbol.iterator]: Array.prototype[Symbol.iterator]
//	}
//	
//	for (var item of obj) {
//		console.log(item);
//	}
//}



{
	//自动以部署方法   部署Iterator.=接口   ---  [Symbol.iterator];   返回value,done
	var arr = ['Hello','world'];
	for (let value of arr) {
		console.log('value',value);
	}
	
	
}




