{
	let a,b,rest;
	[a,b] = [1,2];   //数组解构
	console.log(a,b);
}



{
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest);    //1 2 [3, 4, 5, 6]  
	/*
	 * 解构赋值
	 */
}


//对象
{
	let a ,b;
	({a,b}={a:1,b:2});
	console.log(a,b);
}


{
	let a,b,c,rest;
	[a,b,c=3] = [1,2];   //数组解构
	console.log(a,b,c);   //1,2,3
}

//变量的交换
{
	let a =1;
	let b =2;
	[a,b]=[b,a];   //交换变量
	console.log(a,b);   //2,1
}


{
	function f () {
		return [1,2];
	}
	let a ,b;
	[a,b]=f();
	console.log(a,b);  //1,2
}


//返回多个值  选择性接收某个值
{
	function f () {
		return [1,2,3,4,5]
	}
	let a ,b,c;
	[a,,,b]=f();
	console.log(a,b);  //1,4
}

//取出第一个数,后面的放进一个数组
{
	function f () {
		return [1,2,3,4,5]
	}
	let a ,b,c;
	[a,...b]=f();
	console.log(a,b);  //1,[2,3,4,5];
}

{
	let o = {p:42,q:true};
	let{p,q}=o;
	console.log(p,q);  //42,true
}


{
	let{a=10,b=5}={a:3};
	console.log(a,b);
}


//json对象解构场景
{
	let metaData={
		title:'adc',
		test:[{
			title:'test',
			desc:'description'
		}]
	}
	
	let {title:esTitle,test:[{title:cnTitle}]} = metaData;
	console.log(esTitle,cnTitle);
	
}











