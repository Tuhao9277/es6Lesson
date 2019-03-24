#let const 和var的区别

##Es5两个作用域
####开启严格模式需要 "use strict"
##全局、函数作用域
```javascript
function test(){
    var a = 2;
    for (var i = 0; i < 3; i++) {
        console.log(i); //0 1 2 
    }
    console.log(i); //3
}
test();
```

##Es6块作用域
####默认开启严格模式
###严格模式：变量未声明就引用，就会出现引用错误
###被大括号包裹的区域就是一个块
  * 1.let声明的对象只在块作用域内有效，脱离作用域则出现引用错误
  * 2.let不能重复声明变量

```javascript
function test(){
    var a = 2;
    for (let i = 0; i < 3; i++) {
        console.log(i); //0 1 2 
    }
    console.log(i); //reference error
    let a =1;
    let a =1; //error
}
test();
```
###const 常量，不能被修改
const也具有块作用域的概念
const在声明变量时必须同时赋初值。
const声明对象时对象的属性可以增加和修改
```javascript

function last(){
    const PI = 3.13134234;
    const k = {
        a:1
    }
    k.a = 3;
    console.log(PI);
    console.log(k);
}
last();
```
