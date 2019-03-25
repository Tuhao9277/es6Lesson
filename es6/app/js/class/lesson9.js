{
    //Symbol声明的变量永不相等,独一无二
    let a1 = Symbol();
    let a2 = Symbol();
    //console.log(a1===a2); // false

    let a3 = Symbol.for('a3'); //Symbol.for('key');若内存中存在对应的 key值，则返回那个value
    let a4 = Symbol.for('a3');
    //console.log(a3===a4); //true
}
{
    let a1=Symbol.for('abc');
    let obj={
    [a1]:'123', 
    'abc':345,  //与a1的属性名相等，但a1用了Symbol,故不冲突
    'c':456
    };
    //console.log(obj);
    for (const [key,value] of Object.entries(obj)) {
      //  console.log('[key,value]',[key,value]); //Symbol的属性取不到
    }
    
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);  //只取Symbol
    })

    Reflect.ownKeys(obj).forEach(function(item){
        console.log(obj[item]);
    })  //包含Symbol的所有属性值
}