{
    console.log(0b1110111); //八进制
    console.log(0o123);  //二进制
}
{
    console.log('156',Number.isFinite(156/0)); //是否有尽
    console.log('NaN',Number.isFinite(NaN));
    Number.isNaN() //Not a Number
}
{
    Number.isInteger()//是否为整数 其中  整数.0 仍为true
}
{
    //js计算数字的安全区间在-2的53次方~2的53次方之间，超过则不准
    Number.MAX_SAFE_INTEGER //数的最大上限
    Number.MIN_SAFE_INTEGER //最小下限

    Number.isSafeInteger();//判断一个数是否在安全区间内，只能是数字
}
{
    //返回一个小数的整数部分
    let a = Math.trunc(456.9532567756); //456
    console.log(a);
}
{
    //返回数字标志位
    console.log(Math.sign(-3)); //-1
    console.log(Math.sign(3)); // 0 
    console.log(Math.sign("50")); //1
    console.log(Math.sign("iu"));  //NaN
    //只能是数字或数字字符串，否则输出NaN
}
{
    let a = Math.cbrt(8) //立方根
    console.log(a); //2
}
{
    
}