{
    //正则表达式
    
    let regex = new RegExp('xyz','i');
    let regex2 =new RegExp(/xyz/i);
    //es5中RegExp的正则表达式参数只能填一个
    console.log(regex.test('xyz123'),regex2.test('xyz123'));
    let regex3 = new RegExp(/xyz/gi,'i');
    //es6中可以填写两个参数，且第二个参数作为修饰符会覆盖第一个参数中的修饰符
    console.log(regex3.flags); //flags 获取正则修饰符
}
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+_/y;
    console.log('one',a1.exec(s),a2.exec(s)); // bbb bbb
    console.log('two',a1.exec(s),a2.exec(s)); // bb null
    console.log('two',a1.sticky,a2.sticky); // bb null
    /*g y 都是全局修饰符

    不同的是g在剩余字符中随机匹配
    y是从上一次匹配结束的剩余字符串的第一个字符开始匹配，故也称作粘连符
    */
}
{
    //u修饰符 处理Unicode  16进制，若当前字符大于两个字节，则添加u,否则无法处理
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

    // .只能匹配两个字节以内的字符
    console.log(/\u{61}/.test('a')); //false
    console.log(/\u{61}/u.test('a')); //true
    console.log(`\u{20BB7}`);
    let s='𠮷';
    console.log('u',/^.$/.test(s)); //false
    console.log('u',/^.$/u.test(s)); //true
    console.log('text',/𠮷{2}/.test('𠮷𠮷')); //false
    console.log('text-2',/𠮷{2}/u.test('𠮷𠮷')); //true   
}
