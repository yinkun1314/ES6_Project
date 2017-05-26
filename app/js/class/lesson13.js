//类
{
	//基本定义和生成实例
	class Parent{
		constructor(name='xxx'){
			this.name = name;			
		}
	}
	let v_parent = new Parent('v');
	console.log('构造函数和实例',v_parent);
	
}

//继承
{
  // 继承
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{

  }

  console.log('继承',new Child());
}

console.log('********************************************************************');

{
  // 继承传递参数
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name);
      this.type='child';
    }
  }

  console.log('继承传递参数',new Child('hello'));
}


{
	//getter  setter
	class Parent{
		constructor(name='hahahha'){
			this.name = name;
		}
		// 属性  不是函数
		get longName(){
			return 'yx'+this.name;
		}
		set longName(value){
			this.name = value;
		}
	}
	
	let v = new Parent();
	console.log('getter',v.longName);   //获取
	v.longName='hello';
	console.log('setter',v.longName);   //改变
	
}


{
	class Parent{
	    constructor(name='mukewang'){
	      this.name=name;
	    }
	    //部署静态方法
	    static tell(){
	    	console.log('tell');
	    }
	}
	Parent.tell();
	
}

{
	//静态属性
	class Parent{
	    constructor(name='mukewang'){
	      this.name=name;
	    }
	    //部署静态方法
	    static tell(){
	    	console.log('tell');
	    }
	}
	
	//静态属性直接在类上定义
	Parent.type = 'test';
	console.log('静态属性',Parent.type);
	
	
}
