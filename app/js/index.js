/*
知识点接口  打开即可查看
 */
//import 'babel-polyfill';
// import './class/lesson12';

/*
 * 功能
 * 倒计时      玩法切换     计算金额
 * 添加号码	   投注支付	    随机号码
 * 奖金预测   状态更新     动态遗漏
 */

/*
 * 覆盖知识点
 *    let const  结构赋值     正则扩展     数值扩展
 * 	    数组扩展          函数扩展   对象扩展   字符串扩展
 * 	  Symbol       数据结构   Proxy   Reflect
 * 	    类		   Promise   Generator  模块化
 *
 */
import 'babel-polyfill';   //es6兼容处理
import Lottery from './lottery.js';   //彩种入口文件
//
const syy=new Lottery();
console.log(syy);
