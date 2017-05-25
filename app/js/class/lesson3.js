/*
 * 正则
 */

{
	let regex = new RegExp('xyz','i');  //第一个是字符串
	let regex2 = new RegExp(/xyz/i);
	
	console.log(regex.test('xyz123'),regex2.test('xyz123'));  //true,true;
	
	let regex3 = new RegExp(/xyz/ig,'i');
	console.log(regex3.flags);
}

{
//	y,u
	let s = 'bbb_b_bbb';
	let a1 = /b+/g;   //g上一次匹配的位置
	let a2 = /b+/y;		//匹配的第一个 跟着后面的下一个
	console.log('one',a1.exec(s),a2.exec(s));
	console.log('two',a1.exec(s),a2.exec(s));
	
	console.log(a1.sticky,a2.sticky);	
}

{
	
}








