{
    //修饰器
    //修改类的行为
    //限制某个属性只读
//    let readonly = function(target,name,desciptor){
//         desciptor.writable = false;
//         return desciptor
//     };
//     class Test{
//         @readonly
//         time(){
//             return '2019-3-27';
//         }
//     }
//     let test = new Test();
//    // test.time = function(){
//    //     console.log('reset time');
//    // }
//     console.log(test.time()); 
}
{
    // let typename = function(target,name,descriptor){
    //     target.myname = 'hello' //添加后变为类的静态属性
    // }
    // @typename
    // class Test{
        
    // }
    // console.log('类修饰符',Test.myname);
}
//第三方修饰器的js库
// core-decorators; cnpm install core-decorators
{
    /**
     * 
     * @param {Sring} type show ,click
     */
    let log = (type)=>{
        return function(target,name,descriptor){
            //保存原始函数体
            let src_method = descriptor.value;
            descriptor.value=(...arg)=>{
                src_method.apply(target,arg);
                console.info(`log ${type}`);
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}