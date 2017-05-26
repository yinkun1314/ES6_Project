//加载模块
import 'babel-polyfill'
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from'./lottery/interface.js'
import $ from 'jquery';



//多重继承  继承上面各个模块的代码
const copyProperties = function (target,source) {
	for (let key of Reflect.ownKeys(source)) {
		//选择性拷贝 是否是构造函数  有原型 是否有name
		if (key!=='constructor'&&key!=='prototype'&&key!=='name') {
			let desc = Object.getOwnPropertyDescriptor(source,key);
			Object.defineProperty(target,key,desc)   //实现深拷贝
		}
	}
}


//多重继承方法
const mix =function (...mixins) {
	class Mix{}
	for(let mixin of mixins){
		copyProperties(Mix,mixin);   //将4个模块拷贝上去
		copyProperties(Mix.prototype,mixin.prototype);  //原型上的
	}
	return Mix;
}

//定义lottery
class Lottery extends mix(Base,Calculate,Interface,Timer){
	constructor(name='syy',cnname='11选5',issue='**',state='**'){
		super();  //继承类
		this.name=name;  //对象的属性
		this.cnname = cnname;
		this.issue =issue;
		this.state = state;
		this.el='';  //当前的选择器
		this.omit = new Map();  //遗漏
		this.open_code=new Set();  //开奖号码
		this.open_code_list=new Set(); //开奖记录
		this.play_list =new Map();  //玩法列表
		this.number = new Set();  //选号
		this.issue_el='#curr_issue';  //当前选号的期号选择器
		this.countdown_el = '#countdown';  //倒计时选择器
		this.state_el = 'state_el';  //状态选择器
		this.cart_el='.codelist'  //购物车选择器
		this.omit_el ='';  //遗漏选择器
		this.cur_play='r5';  //当前玩法
		//三个方法初始化
		this.initPlayList();
		this.initNumber();
		this.updateState();
		
		this.initEvent();
	}

	//状态更新
	updateState(){
		let self=this;
		this.getState().then(function (res) {   //获取状态完成异步操作
			self.issue =res.issue;  //拿到期号
			self.end_time = res.end_time;   //拿到销售的截止时间
			self.state = res.state;  //拿到当前状态
			$(self.issue_el).text(res.issue);  //更新当前的期号
			self.countdown(res.end_time,function (time) {  //更新倒计时
				$(self.countdown_el).html(time);  //更新时间
			},function () {
				setTimeout(function () {
					self.updateState();  //重新获取最新销售状态
					self.getOmit(self.issue).then(function (res) {  //获取当前最新的遗漏

					});
					self.getOpenCode(self.issue).then(function (res) {  //更新奖号

					})
				},500)
			})
		})
	}

	//初始化事件
	initEvent(){
		let self =this;
		//添加base.js中的dom事件
		$('#plays').on('click','li',self.changePlayNav.bind(self));  //切换玩法
		$('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));  //号码选中
		$('#confirm_sel_code').on('click',self.addCode.bind(self));  //添加号码
		$('.dxjo').on('click','li',self.assistHandle.bind(self));  //操作区 大小 奇偶 清除
		$('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));  //随机号码
	}
}

export default Lottery;
