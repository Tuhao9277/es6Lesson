// proxy和Reflect
    // 代理与反射
    // 连接用户和对象
    // 反射object
{
    //创建供应商对象
    let obj = {
        time:'2019-3-26',
        name:'tuhao',
        _r:123
    }
    let monitor = new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key){
            return target[key].replace('2019','2020')
        },//get操作
        //拦截对象的设置属性,只允许修改name
        set(target,key,value){
            if(key === 'name'){
                return target[key] =value;
            }
            else{
                return target[key]
            }
        },
        // 拦截key in objcet操作
        has(target,key){
            if(key==='name'){
                return target[key];
            }else{
                return false;
            }
        },
        // 拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }
            else{
                return target[key];
            }
        },
        // 拦截 Object.keys,
        // Object.getOwnPropertySymbols Object.getOwnPropertyNames
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time');  //time过滤，不予返回
        } 


    }); //映射obj,用户操作代理对象，并把修改信息传回原对象

    console.log('get',monitor.time); 
    monitor.name='imooc';
    console.log('set',monitor); 

    console.log('has','time' in monitor); //false;
    console.log('has','name' in monitor); //true;
    
    // delete monitor.time;

    // console.log('delete',monitor);
    // delete monitor._r;
    // console.log('delete',monitor);
    //console.log('ownKeys',Object.keys(monitor));
}
{
    //Reflect方法同Proxy
    let obj = {
        time:'2019-3-26',
        name:'tuhao',
        _r:123
    };
    console.log('Reflect',Reflect.get(obj,'time'));
    Reflect.set();
    Reflect.has();

    
}
