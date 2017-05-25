import $ from 'jquery'

/**
 * 和服务端通信的所有接口
 * @type {[type]}
 */


class Interface{
	//获取遗漏接口
	getOmit(issue){
		let self = this;
		//发起服务端请求
		return new Promise(function (resolve,reject) {
			$.ajax({
				url:'/get/omit',
				data:{
					issue:issue
				},
				dataType:'json',
				success:function (res) {
					//将获得的数据保存在当前的对象上
					self.setOmit(res.data);
					resolve.call(self,res);
				},
				error:function (err) {
					reject.call(err);
				}
			})
		});
	}
	//获取开奖号码接口
	getOpenCode(issue){
		let self = this;
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/opencode',
				data:{
					issue:issue,
				},
				dataType:'json',
				success:function (res) {
					self.setOpenCode(res.data);
					resolve.call(self,res);
				},
				error:function (err) {
					reject.call(err);
				}
			})
		})
	}
	//获取期号
	getState(issue){
		let self = this;   //将当前指针指向这个对象
		return new Promise((resolve,reject)=>{
			$.ajax({
				url:'/get/state',
				data:{
					issue:issue,
				},
				dataType:'json',
				success:function (res) {
					resolve.call(self,res);
				},
				error:function (err) {
					reject.call(err);
				}
			})
		});
	}
}

export default Interface;

//使用promise对象达到异步操作
//共用避免回调
