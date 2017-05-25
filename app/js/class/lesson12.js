/*
 * Proxy  Reflect
 * 
 * proxy和reflect的概念
 * proxy和reflect的适用场景
 */

{
	let obj = {       //原始的数据
		time:'2017-5-19',   
		name:'net',
		_r:123
	};
	
	//代理层  不让用户直接操作原始数据
	
	let monitor = new Proxy(obj,{   //新生成一个对象 映射obj, 做一些操作
		//拦截对象属性的读数
		get(target,key){   //拦截代理读取的属性
			return target[key].replace('2017','2018');
		},
		//拦截对象设置属性
		set(target,key,value){
			if (key ==='name') {
				return target[key] =value;
			}else{
				return target[key];
			}
		}
	});
	
	console.log('get',monitor.time);   //当读取这个属性的时候 将原先的改为2018

	monitor.time = '20238';
	monitor.name = 'yx';
	monitor._r = 'yx';
	console.log('set',monitor.time);
	console.log('name',monitor.name);
	
}


{
	//判断当前对象中是不是有某个属性
	let obj = {       //原始的数据
		time:'2017-5-19',   
		name:'net',
		_r:123
	};
	
	let monitor = new Proxy(obj,{
		get(target,key){
			//  读取操作	
		},
		set(target,key,value){
			//设置操作
		},
		
		//拦截操作
		has(target,key){
			if (key === 'name') {
				return target[key];
			}else{
				return false;
			}
		},
		
		//删除操作   拦截delete
	    deleteProperty(target,key){
	      if(key.indexOf('_')>-1){
	        delete target[key];
	        return true;
	      }else{
	        return target[key]
	      }
	    },
	    
	    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
	    ownKeys(target,key){
	    	return Object.keys(target).filter(item=>item!='time');
	    }
	    
		
	});
	
	console.log('has','name' in monitor,'time' in monitor);//true  false
	
	
//	delete monitor.time;
//	console.log('delete',monitor);	
//	
//	delete monitor._r;
//	console.log('delete',monitor);
	console.log('ownkeys',Object.keys(monitor));

}



{
	let obj = {       //原始的数据
		time:'2017-5-19',   
		name:'net',
		_r:123
	};
	
	
	//obj.time   reflect.get(obj,time);
	console.log('reflect',Reflect.get(obj,'time'));
	
 	Reflect.set(obj,'name','yk');   //第一个是一个对象
 	console.log(obj);
	
	
	console.log(Reflect.has(obj,"name"));
	
}


{
	//对数据进行校验    key:等同于对象的名称
	function validator (target,validator) {   //提供代理     target : 指向this
		return new Proxy(target,{
			_validator:validator,   //保存修改 进行下步set操作
			set(target,key,value,proxy){   
				if(target.hasOwnProperty(key)){   //判断有没key值
					let val = this._validator[key];
					if(!!val(value)){
						return Reflect.set(target,key,value,proxy);   //返回正确的数值在上面
					}else{
						throw Error(`不能设置${key}到${value}`);
					}
				}else{
					throw Error(`${key} 不存在`)
				}
			}
		})
	}
	
	//验证扩展 过滤选项
	const personValidators ={
		name(val){
			return typeof val === 'string';
		},
		age(val){
			return typeof val === 'number' &&val>18;
		},
		mobile(val){
			
		}
	}
	
	class Person{
		constructor(name,age){
			this.name = name;
			this.age = age;
			this.mobile ='1111';
			return validator(this,personValidators);  //this person实例的对象   设置代理 通过代理验证
		}
	}
	
	const person1 = new Person('leilei',30);
	console.log(person1);
	
	person1.name = 'han meimie';   //代理提供对元数据的处理  不能修改
	console.log(person1);
	
}

 
 
 









