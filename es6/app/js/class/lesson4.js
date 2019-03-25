{
   // console.log('a',`\u0061`);
   // console.log('s',`\u20BB7`); //此值大于0xfff 故拆分成 20BB 和 7
   // console.log('s',`\u{20BB7}`);
}
{
    let s= '𠮷';
   // console.log("length",s.length); //2  每两个字节算是一个长度
  //  console.log('1',s.charAt(0));
  //  console.log('2',s.charAt(1));
  //  console.log('1',s.charCodeAt(0)); //取两个字节
   // console.log('2',s.charCodeAt(1));

}
{
    let s= '𠮷a';
  //  console.log("code 0",s.codePointAt(0).toString(16)); //计算第一个字符的完整码值
   // console.log("code 01",s.codePointAt(1)); //计算第一个字符的后2个字节的码值
  //  console.log("code 02",s.codePointAt(2)); //计算第二个字符的2个字节的码值
    console.log(String.fromCharCode("0x20BB7"));
    console.log(String.fromCodePoint("0x20bb7")); //可以处理Unicode字符
}
{
    let str = '\u{20bb7}abc';
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        console.log("es5",element); //𠮷打印乱码
    }
    for (const iterator of str) {
        console.log("es6",iterator); //正常输出 
    }
}

{
    //正则判断
    let str = "String";
    console.log("includes",str.includes("c"));
    console.log("startWith",str.startsWith("S"));
    console.log("end",str.endsWith("ng"));
}
{
    let str ="abc";
    console.log(str.repeat(2)); //复制字符串两次
}
{
    //模板字符串 ` ${varible}`
    let name = "list";
    let info =  "hello world!";
    let m = `i am ${name}, ${info}`;
    console.log(m);
}
{
    console.log('1'.padStart(2,'0')); //要求字符串为两位，若不满足则在首部添加0
    console.log('1'.padEnd(2,'0'));//尾部添加 
}
{
    //标签模板
    let user={
        name:"list",
        info:"hello world"
    };
   var res = abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2;
    }
    console.log(res);
}
{
    console.log(String.raw`Hi\n${1+2}`); //raw对所有的 \进行转义
    console.log(`Hi\n${1+2}`);
}