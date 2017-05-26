//数值的扩展
{
	//二进制  0 bk开头
	console.log(0b11110111);
	//八进制
	//0o
	console.log(0o767);
}

{
//	Number.isFinite()  是不是再有效值范围
	console.log('15',Number.isFinite(15));
	console.log('NaN',Number.isFinite(NaN));   //false
	console.log('1/0',Number.isFinite(1/0));
	
	//是不是一个数
	console.log(Number.isNaN(88));
}


{	
	console.log('****************************************');
	//判断是不是整数Number.isInteger()
	console.log(Number.isInteger(25));  //true
	console.log(Number.isInteger(25.0));//true
	console.log(Number.isInteger(25.5));//false
	console.log(Number.isInteger('25'));//false
}


{
	//-2^53 ~ 2^53
	console.log(Number.MAX_SAFE_INTEGER);  //是个常量  最大值上限
	console.log(Number.MIN_SAFE_INTEGER)//下限
	
}


{
	//只取值整数部分
	console.log(Math.trunc(4.1));
}


{
//	判断正负
	  console.log('-5',Math.sign(-5));
	  console.log('0',Math.sign(0));
	  console.log('5',Math.sign(5));
	  console.log('50',Math.sign('50'));
	  console.log('foo',Math.sign('foo'));   //nan
}

//math.cbrt   返回一个数的立方根
{
	console.log(Math.cbrt(8));
}



