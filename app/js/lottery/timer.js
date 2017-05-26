   //声明一个类
   class Timer{
   	 countdown(end,update,handle){  //截止时间  时间更新回掉 倒计时结束时间
   	 	const now = new Date().getTime();  //当前时间（毫秒）
   	 	const self = this;   //获取当前对象的指针
   	 	if (now-end>0) {
   	 		handle.call(self);
   	 	}else{
   	 		//全部转换成毫秒数
   	 		let last_time = end-now;  //以毫秒形式剩余时间
   	 		let px_d = 1000*60*60*24;   //识别一天多少毫秒
   	 		const px_h = 1000*60*60   //一小时时间
   	 		const px_m = 1000*60    //分
   	 		const px_s = 1000;		//秒
   	 		let d = Math.floor(last_time/px_d);
   	 		let h = Math.floor((last_time-d*px_d)/px_h);
   	 		let m = Math.floor((last_time-d*px_d-h*px_h)/px_m);
   	 		let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);
   	 		let r =[];
   	 		if (d>0) {
   	 			r.push(`<em>${d}</em>天`);
   	 		}
   	 		if (r.length ||(h>0)) {   //同时判断是否有天
   	 			r.push(`<em>${h}</em>时`);
   	 		}
   	 		if (r.length ||(m>0)) {
   	 			r.push(`<em>${m}</em>分`);
   	 		}
   	 		if (r.length ||(s>0)) {
   	 			r.push(`<em>${s}</em>秒`);
   	 		}
   	 		self.last_time = r.join('');
   	 		update.call(self,r.join(''));
   	 		//重新调用轮询
   	 		setTimeout(function  () {
   	 			self.countdown(end,update,handle);
   	 		},1000);
   	 	}
   	 }
   }

export default Timer;



