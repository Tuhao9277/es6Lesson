{
    //Set 存放不重复的元素
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log(list.size);
}
{
    //自动转换数组
    let arr = [2,23,4,54,6];
    let list = new Set(arr); //自动对arr进行转换
    console.log(list.size); //5
}
{
    let list = new Set();
    list.add(1);
    list.add(1);
    list.add(2);
    console.log(list); //添加重复元素，不会报错。

    let arr =[1,2,3,4,4,5];
    let list2 = new Set(arr);
    console.log('数组去重',list2); //需要保证数据类型一致
}
{
    let arr= ['asd','has','dede'];
    let list = new Set(arr);
    list.has('has'); //是否存在
    list.delete('asd');//删除
    list.clear(); //清除
}
{
    // Set遍历
    let arr= ['asd','has','dede'];
    let list = new Set(arr);
    for (const iterator of list.entries()) {
     //   console.log(iterator);
    }
}
{
    //weakSet元素只能是对象，弱引用
    let weakSet = new WeakSet();
    let arg = {};
    weakSet.add(arg);
    console.log(weakSet);
    //weakSet.add(2);
    //没有clear方法，没有set属性，不能遍历，其余同Set
}
{
    //map
    let map = new Map();
    let arr = ['123'];
    map.set(arr,2333);
    console.log('map',map,map.get(arr));
}
{
    let map = new Map([['a',123],['b',455]]);
    console.log(map,map.size);
    map.delete('a');
    map.clear();
}
{
    //key值必须是对象,没有set属性，没clear
    let weakMap = WeakMap();
}

