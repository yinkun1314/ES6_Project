//
{
	console.log('a','\u0061');
}


{
	let s='𠮷';
	console.log('length',s.length);
	console.log('a',s.charAt(0));
	//chartAt  :取出字符
	//chartCodeAt :取出字符编码
	
	

	let s1='𠮷a';
	console.log('length',s1.length);
	
}



{
	console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));
}



{
	let str = '\u{20bb7}abc';
	for (let i =0;i<str.length;i++) {
		console.log('es5',str[i]);
	}
	
	for (var code of str){
		console.log(code);
	}
	
}

{
	let str = 'string';
	console.log('1',str.includes('c'));   //是否包含
	console.log('strat',str.startsWith('str'));   //是否以这个字符开始
	console.log('end',str.endsWith('ng'));		//是否以这个字符结束
}


{
//	repeat重复
	let str = 'abc';
	console.log(str.repeat(2));
}



//字符串模板
{
	let name = 'list';
	let info = 'hello world';
	
	let m = `i am ${name},${info}`;
	console.log(m);
	
}

{
	var a ='1'.padStart(2,'0');
	console.log(a);
	console.log('1'.padStart(2,'0'));   //向前补白
 	console.log('1'.padEnd(2,'0'));		//向后补白
}




//标签模板
{
	let user = {
		name:'list',
		info:'hello world'
	};
	console.log(abc`i am${user.name},${user.info}`);
	function abc (s,v1,v2) {
		console.log(s,v1,v2);
		return s+v1+v2;
	}
	
}



//string raw
{
	console.log(String.raw`Hi\n${1+2}`);
	console.log(`Hi\n${1+2}`);
}







