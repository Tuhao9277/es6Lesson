{
    let arr = Array.of(3,4,5,6);
    console.log(arr);
}
{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p); //转义成数组
    pArr.forEach(function(item){
        console.log(item.textContent);
    });
    console.log(Array.from([1,32,4],function(item){
       return item *2;
    })) //第二种使用方法，第二个参数可以map参数，进行处理
}
{
    console.log('fill-7',[1,'a',undefined].fill(7)); //数组元素全部填充成7
    console.log('fill,pos',['a','v','c','d','e'].fill(7,1,3)); // a 7 7 前闭后开
}
{
    for (const index of ['object','mood'].keys()) {
        console.log(index); //keys()方法 返回数组下标
    }
}
{
    for (const value of ['object'].values()) {
        console.log(value); //values()方法 返回数组值
    }
}
{
    for (const [index,value] of ['object','acsdc','sync'].entries()) {
        console.log('value:',value,'index',index);
    }
}
{
    console.log([1,2,3,4,5].copyWithin(0,3,5));  //0号目标是复制起点，3是开始复制的位置，5是结束位置，覆盖从0开始的元素
}
{
    console.log([1,2,3,4,4].find(function(item){
        return item>3;
    })) //找到一个后就返回
}
{
    console.log([1,2,3,4,4].findIndex(function(item){
        return item>3;
    }))//找到一个后就返回
}
{
    console.log('number',[1,2,NaN].includes(1)) //是否包含元素 1
    console.log('number',[1,2,NaN].includes(NaN)) //是否包含NaN,返回true，es5无法处理
}