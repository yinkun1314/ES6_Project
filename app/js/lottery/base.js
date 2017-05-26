//基础设置
/**
 * 彩种的基本信息  玩法 奖金 基本数据
 */

import $ from 'jquery';
class Base{
	//初始化奖金和玩法说明   (数据和模板)
	initPlayList(){
		this.play_list.set('r2',{   //map数据结构
			bonus:6,
			tip:'从01～11中任选5个或多个号码，选号与奖号任意两个号相同，即中奖<em class="red">6</em>元',
			name:'任二'
		})
		.set('r3',{
			bonus:19,
			tip:'从01～11中任选3个或多个号码，选号与奖号任意三个号相同，即中奖<em class="red">19</em>元',
			name:'任三'
		})
		.set('r4',{
			bonus:78,
			tip:'从01～11中任选4个或多个号码，选号与奖号任意四个号相同，即中奖<em class="red">78</em>元',
			name:'任四'
		})
		.set('r5',{
			bonus:540,
			tip:'从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
			name:'任五'
		})
		.set('r6',{
			bonus:90,
			tip:'从01～11中任选6个或多个号码，所选号码与开奖号码五个号码相同，即中奖<em class="red">90</em>元',
			name:'任六'
		})
		.set('r7',{
			bonus:26,
			tip:'从01～11中任选7个或多个号码，选号与奖号五个号相同，即中奖<em class="red">26</em>元',
			name:'任七'
		})
		.set('r8',{
			bonus:9,
			tip:'从01～11中任选8个或多个号码，选号与奖号五个号相同，即中奖<em class="red">9</em>元',
			name:'任八'
		})
	}

	//初始化号码
	initNumber(){
		for (let i=1;i<12;i++) {
			//set  防止重复
			this.number.add((''+i).padStart(2,'0'));  //padStart 字符串方法 保证两位数 位数不够前面用0代替 位数狗返回原位数
		}
	}

	//设置遗漏数据
	setOmit(omit){
		//保存在set数据结构中
		let self =this;
		self.omit.clear();  //清空
		for (let [intex,item] of omit.entries()) {
			self.omit.set(index,item)   //重新赋值
		}
		//遗漏数据更新到页面中
		$(self.omit_el).each(function (index,item) {
			$(item).text(self.omit.get(index));
		});
	}

	//设置开奖
	setOpenCode(code){
		let self = this;
		self.open_code.clear();
		for (let item of code.values()) {
			self.open_code.add(item);  //开奖号码是不重复的  所以用set集合
		}
		//更新获奖的接口
		self.updateOpenCode&&self.updateOpenCode.call(self,code);
	}


	//号码选中取消
	toggleCodeActive(e){
		let self =this;
		let $cur = $(e.currentTarget);   //获取当前选中的dom   事件代理
		$cur.toggleClass('btn-boll-active');
		//计算
		self.getCount();
	}

	//切换玩法
	changePlayNav(e){
		let self =this;
		let $cur =$(e.currentTarget); //currentTarget  发生在Dom上的事件 子元素上
		$cur.addClass('active').siblings().removeClass('active');
		self.cur_play = $cur.attr('desc').toLocaleLowerCase();    //将R1~R8 转换为小写
		$('#zx_sm span').html(self.play_list.get(self.cur_play).tip);   //切换过程
		$('.boll-list .btn-boll').removeClass('btn-boll-active');
		self.getCount();  //重新计算
	}

	//全选
	assistHandle(e){
		e.preventDefault();
		let self =this;
		let $cur =$(e.currentTarget);
		let index = $cur.index();  //选中索引
		  $('.boll-list .btn-boll').removeClass('btn-boll-active'); //清空上次的选择
			if(index===0){   //全选
	      $('.boll-list .btn-boll').addClass('btn-boll-active');
	    }
	    if(index===1){  //选大
	      $('.boll-list .btn-boll').each(function(i,t){
	        if(t.textContent-5>0){
	          $(t).addClass('btn-boll-active')
	        }
	      })
	    }
	    if(index===2){   //选小
	      $('.boll-list .btn-boll').each(function(i,t){
	        if(t.textContent-6<0){
	          $(t).addClass('btn-boll-active')
	        }
	      })
	    }
	    if(index===3){  //奇数
	      $('.boll-list .btn-boll').each(function(i,t){
	        if(t.textContent%2==1){
	          $(t).addClass('btn-boll-active')
	        }
	      })
	    }
	    if(index===4){   //偶数
	      $('.boll-list .btn-boll').each(function(i,t){
	        if(t.textContent%2==0){
	          $(t).addClass('btn-boll-active')
	        }
	      })
	    }
	    self.getCount();
	  }

	//获取彩票名称
	getName(){
		return this.name;
	}

	//添加号码
	addCode(){
		let self=this;
		let $active=$('.boll-list .btn-boll-active').text().match(/\d{2}/g);
		let active=$active?$active.length:0;  //注意这里
		let count=self.computeCount(active,self.cur_play);
		if(count){
			self.addCodeItem($active.join(' '),self.cur_play,self.play_list.get(self.cur_play).name,count);
		}
	}

	//添加单次号码
	addCodeItem(code,type,typeName,count){
		let self =this;
		//创建字符串模板
		const tpl=`
    <li codes="${type}|${code}" bonus="${count*2}" count="${count}">
		 <div class="code">
			 <b>${typeName}${count>1?'复式':'单式'}</b>
			 <b class="em">${code}</b>
			 [${count}注,<em class="code-list-money">${count*2}</em>元]
		 </div>
	 </li>
    `;
    $(self.cart_el).append(tpl);
    self.getTotal(); //计算所有金额
	}

	//设置统计
	getCount(){
		let self=this;
		let active=$('.boll-list .btn-boll-active').length;
		let count=self.computeCount(active,self.cur_play);
		let range=self.computeBonus(active,self.cur_play);
		let money = count*2;  //要花出的钱
		let win1=range[0]-money;   //最小盈利额
		let win2=range[1]-money;   //最大盈利额
		let tpl;
		//判断是赚还是亏 赚了红色标注,亏了绿色;
		let c1=(win1<0&&win2<0)?Math.abs(win1):win1;
    let c2=(win1<0&&win2<0)?Math.abs(win2):win2;
    if(count===0){
      tpl=`您选了 <b class="red">${count}</b> 注，共 <b class="red">${count*2}</b> 元`
    }else if(range[0]===range[1]){
      tpl=`您选了 <b>${count}</b> 注，共 <b>${count*2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 元，
			您将${win1>=0?'盈利':'亏损'}
			<strong class="${win1>=0?'red':'green'}">${Math.abs(win1)} </strong> 元</em>`
    }else{
      tpl=`您选了 <b>${count}</b> 注，共 <b>${count*2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 至 <strong class="red">${range[1]}</strong> 元，
			您将${(win1<0&&win2<0)?'亏损':'盈利'}
			<strong class="${win1>=0?'red':'green'}">${c1} </strong>
			至 <strong class="${win2>=0?'red':'green'}"> ${c2} </strong>
			元</em>`
    }
    $('.sel_info').html(tpl);
}

	//计算所有金额
	getTotal(){
    let count=0;
    $('.codelist li').each(function(index,item){
      count+=$(item).attr('count')*1;
    })
    $('#count').text(count);
    $('#money').text(count*2);
  }

	//随机号码
	getRandom(num){
		let arr =[],index
		//定义随机空间
		let number=Array.from(this.number);   //类似数组集合转成数组
		while(num--){
			index=Number.parseInt(Math.random()*number.length);  //保证随机数在这个区间内
			arr.push(number[index]);
			number.splice(index,1);
		}
		return arr.join(' ');
	}

	//添加随机号码
	getRandomCode(e){
		e.preventDefault();
		let num = e.currentTarget.getAttribute('count');  //随机生成的数量
		let play=this.cur_play.match(/\d+/g)[0];
		let self = this;
		if(num==='0'){
			$(self.cart_el).html('')
		}else{
			for(let i=0;i<num;i++){
				self.addCodeItem(self.getRandom(play),self.cur_play,self.play_list.get(self.cur_play).name,1);
			}
		}
	}



}

export default Base;
