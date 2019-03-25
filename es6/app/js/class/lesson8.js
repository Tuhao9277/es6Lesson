{
    //简洁表示法
    let o = 1;
    let k = 2;
    let es5={
        o:o,
        k:k
    }
    let es6={
        o,
        k
    }

    console.log(es5,es6);

    let es5_method={
        hello:function(){
            console.log('hello');//对象中有方法
        }
    }
    let es6_method={
        hello(){
            console.log("hello");
        }
    }
    console.log(es5_method.hello(),es6_method.hello());
}
{
    //属性表达式
    let a ='b';
    let es5_obj={
        a:'k'        
    };
    let es6_obj={
        [a] :'k' //[k]就是表达式,接收上面let定义的a的值
    }
    console.log(es5_obj,es6_obj);
}
{
    // 新增API
    console.log('字符串',Object.is('abc','abc'),'abv'==='abv'); //相当于 ===
    console.log('数组',Object.is([],[]),[]===[]) //数组都是引用类型，地址不同
    //console.log('浅拷贝',Object.assign({a:'a'},{b:'b'}));
    var obj = {a:1};
    var obj2 = {b:2};
    var res = Object.assign({},obj,obj2); //a,b
    console.log(res,obj); //a,b  |  a

    let test = {k:123,o:2}; 
    for (let [key,value] of Object.entries(test)) {
        console.log([key,value]);
    }
}
{
    
}

