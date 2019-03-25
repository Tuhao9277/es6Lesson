{
    //参数默认值
    function news(x,y="worde"){ 
        console.log(x,y);
    }
    news("hello"); //hello worde
    news("hello","kill");
}
{
    let x = "test";
    function test2(x,y=x){
        console.log(x,y);
    }
    test2('kill!'); // kill kill
    console.log(x); //text
}
{

    let x = "test";
    function test2(c,y=x){  //y='test'
        console.log(c,y);
    }
    test2('kill!'); // kill kill
    
}
{
    function test3(...arg){ //转成数组，常用接收个数不确定的参数
        for (const v of arg) {
            console.log(v);
        }
    }
    test3(1,2,3,4,'a');
}
{
    console.log(...[1,2,3]);//输出单个元素，而不是数组格式
}