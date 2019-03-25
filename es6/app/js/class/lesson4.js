{
    console.log('a',`\u0061`);
    console.log('s',`\u20BB7`); //此值大于0xfff 故拆分成 20BB 和 7
    console.log('s',`\u{20BB7}`);
}
{
    let s= '𠮷';
    console.log("length",s.length); //2  每两个字节算是一个长度
    console.log('1',s.charAt(0));
    console.log('2',s.charAt(1));
    console.log('1',s.charCodeAt(0)); //取两个字节
    console.log('2',s.charCodeAt(1));

}
{
    let s= '𠮷a';
    console.log("code 0",s.codePointAt(0).toString(16)); //计算第一个字符的完整码值
    console.log("code 01",s.codePointAt(1)); //计算第一个字符的后2个字节的码值
    console.log("code 02",s.codePointAt(2)); //计算第二个字符的2个字节的码值
}