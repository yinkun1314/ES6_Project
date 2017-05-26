{
  // genertaor基本定义
  let tell=function* (){
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k=tell();

  console.log(k.next());   //iterator接口
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}


{
	//Generator函数和iterator关系
	let obj = {};
	obj[Symbol.iterator] = function* () {   //在obj上提供iterator接口
		yield 1;
		yield 2;
		yield 3;
	}
	
	for (let item of obj) {
		console.log(item);
	}
	
}


{
	//状态机  
	function* state() {
		while (1){
			yield 'A';
			yield 'B';
			yield 'C';
		}
	}
	let status = state();
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	//一直循环 在ABC状态机
}


//{
//	//状态机     运行出来需要安装插件
//	async function state() {
//		while (1){
//			await 'A';
//			await 'B';
//			await 'C';
//		}
//	}
//	let status = state();
//	console.log(status.next());
//	console.log(status.next());
//	console.log(status.next());
//	console.log(status.next());
//	console.log(status.next());
//	console.log(status.next());
//	console.log(status.next());
//	console.log(status.next());
//	console.log(status.next());
//	//一直循环 在ABC状态机
//}





{
	//实例 抽奖
	function draw(count) {
		//具体抽奖逻辑
		//剩余抽奖次数
		console.log(`剩余${count}次`);
	}
	
	//全局对象 影响页面性能  不安全   
	
	//逻辑处理 隔离出来
	function* residue(count) {
		while (count>0){   //循环状态
			count--;
			yield draw(count);
		}
		console.log('次数用完')
	}
	
	let star =residue(5);
	//创建按钮
	let btn = document.createElement('button');
	btn.id = 'start';
	btn.textContent ='抽奖';
	document.body.appendChild(btn);
	document.getElementById("start").addEventListener('click',function () {
		star.next();   //启动next()方法
	},false)
	
}


{
	//服务端的某一个状态定期发生变化 前端定期去取这个状态
	//长轮询    (websorket)
	function* ajax() {
		yield new Promise(function (resolve,reject) {
			//模拟ajax
			setTimeout(function () {
				resolve({code:0});
			},2000);
		})
	}
	
	//轮询过程
	function pull () {
		let generator =ajax();   //实例化
		let step = generator.next();  //取得Generator步骤
		step.value.then(function (d) {   //value  Promise实例   d:后端的实际数据
			if (d.code !=0) {
				//模拟ajax操作
				setTimeout(function () {
					console.log('wait');
					pull();
				},1000)
			}else{
				console.log(d);
			}
		})
	}
	pull();
	
	
	
	
	
}







