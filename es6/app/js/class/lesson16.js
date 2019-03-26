//Generator
{
    //异步编程的解决
    // next函数的用法
    // yield*的用法

    //基本用法 function*
    let tell = function* (){
        yield 'v';
        yield 'a';
        return 'b'; //依次出现
    };
    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}
{
    // 遍历器生成函数
    let obj = {};
    obj[Symbol.iterator] = function* (){
        yield 1;
        yield 2;
        yield 3;
    }
    for (const value of obj) {
        console.log('obj',obj);
    }
}
{
    //状态机
    // abc三种状态 循环
    let state = function*(){
        while(1){
            yield '1';
            yield '2';
            yield '3';
        }
    }
    let Status = state();
    console.log(Status.next());
    console.log(Status.next());
    console.log(Status.next());
    console.log(Status.next());
    console.log(Status.next());
    console.log(Status.next());
    console.log(Status.next());  //123123123...
}
{
    // let state =async function(){
    //     while(1){
    //         await '1';
    //         await '2';
    //         await '3';
    //     }
    // }
}

{
    let draw = function(count){
        //抽奖Code
        console.info(`剩余${count}次`);
    }
    //计算剩余次数。
    //不要把数据存放到全局对象上
    let residue = function*(count){
        while(count>0){
            count--;
            yield draw(count);
        }
    }
    let star = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = "抽奖";
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        star.next();
    },false)

}
{
    //服务端某一个数据状态定时变换。http需要去获取这种变换
    //长轮询 
    let ajax =function*(){
        //generator promise 的结合
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0})
            },200);
        })
    }
    //轮询
    let pull = function(){
        let generator = ajax();
        let step = generator.next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.info('wait');
                    pull()
                },1000)
            }
            else{
                console.info(d);
            }
        })
    }
    pull();
}