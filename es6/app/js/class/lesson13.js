{//类，面向对象
class Parent{
    constructor(name='imooc'){
        this.name = name;
    };//构造方法

}
let v_parent = new Parent('v');
//console.log(v_parent);

}
{
    class Parent{
        constructor(name='imooc'){
            this.name = name;
        };//构造方法
    }

    class Child extends Parent{
    }
    //console.log("继承",new Child()) //继承父类属性
}
{
    //super();
    class Parent{
        constructor(name='imooc'){
            this.name = name;
        };//构造方法
    }

    class Child extends Parent{
        constructor(name='child'){

            super(name); 
            this.type = 'childs';
        };
    }
    //console.log(new Parent()); //父类原属性不变
    //console.log("继承",new Child()) //更改子类属性
}
{ 
    //Getter and Setter
    
    class Parent{
    constructor(name='imooc'){
        this.name = name;
    };//构造方法

    get longName(){
        return 'mk '+this.name;
    }
    set longName(value){
        this.name = value;
    }
  }   
    let v = new Parent();
    console.log('getter',v.longName);
    v.longName = 'hello';
    console.log('setter',v.longName);

}
{
    //静态方法
    class Parent{
        constructor(name='imooc'){
            this.name = name;
        };//构造方法
        
        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();

}
{
    //静态属性
    class Parent{
        constructor(name='imooc'){
            this.name = name;
        };//构造方法
        
        static tell(){
            console.log('tell');
        }
    }
    Parent.type = 'ters'; //此时定义的属性就是静态属性
    console.log('静态属性',Parent.type);
}