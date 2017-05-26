//Promise 对象
{
	//实现前端和服务端通信的方式
	let ajax = function (callback) {
		console.log('执行1');
		//定时器模拟
		setTimeout(function () {
			callback&&callback.call();
		},1000)
	};
	ajax(function () {
		console.log('timeout1');
	});
}



{
	let ajax = function () {
		console.log('执行2');
		return new Promise(function (resolve,reject) {
			setTimeout(function () {
				resolve();
			},1000)
		})
	};
	
	ajax().then(function () {   //方法指向Promise中的resolve
		console.log('promise','timeout2');
	},function () {
		
	})
	
}


{
	let ajax = function () {
		console.log('执行3');
		return new Promise(function (resolve,reject) {
			setTimeout(function () {
				resolve();
			},1000)
		})
	};
	ajax().then(function () {   //方法指向Promise中的resolve
		console.log('promise','timeout2');
	})
}


{
	//cath
	let ajax = function (num) {
		console.log('执行4');
		return new Promise(function (resolve,reject) {
			if (num>5) {
				resolve();
			}else{
				throw new Error('出错了');
			}
		})
	}
	ajax(3).then(function () {
		console.log(3)
	}).catch(function (err) {
		console.log('catch',err);
	});
	
}



{
	//实例  Promise处理图片加载完在加载页面
	function loadImg (src) {
		return new Promise((resolve,reject)=>{
			let img =document.createElement('img');
			img.src= src;
			img.onload=function () {
				resolve(img);
			}
			img.error = function (err) {
				reject(err);
			}
		})
	}
	
	//添加到页面上
	function showImgs (imgs) {
		imgs.forEach(function (img) {
			document.body.appendChild(img);
		})
	}
	
	Promise.all([   //多个Promise合成一个Promise  完成之后才会触发
		loadImg('https://pic.qyer.com/album/user/2083/55/Q0ldQR8CZ00/index/275x185'),
		loadImg('https://pic.qyer.com/album/user/1449/32/QE1RSxkFYEk/index/275x185'),
		loadImg('https://pic1.qyer.com/album/user/714/4/RkhRQh4HZw/index/275x185')
	]).then(showImgs);
	/*
	 * 只有等3张图片都加载完成  才会显示在桌面上
	 */
	
}

{
	//只要有一个显示就显示出来Promise添加到页面
	//一个实例率先改变状态，状态就跟着改变。那个率先改变的 Promise 实例的返回值
	function loadImg (src) {
		return new Promise((resolve,reject)=>{
			let img =document.createElement('img');
			img.src= src;
			img.onload=function () {
				resolve(img);
			}
			img.error = function (err) {
				reject(err);
			}
		})
	}
	
	function showImgs (img) {
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	}
	Promise.race([   //多个Promise合成一个Promise  一个状态发生改变就触发这一个 先到先得   不同的源
		loadImg('https://pic.qyer.com/album/user/2083/55/Q0ldQR8CZ00/index/275x185'),
		loadImg('https://pic.qyer.com/album/user/1449/32/QE1RSxkFYEk/index/275x185'),
		loadImg('https://pic1.qyer.com/album/user/714/4/RkhRQh4HZw/index/275x185')
	]).then(showImgs);
	      
}










