{
    let arr =['hello','world'];
    let map = arr[Symbol.iterator]();
    //arr内部自动实现iterator接口
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}
{
    let obj = {
        start:[1,3,2],
        end:[7,8,0],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr=self.start.concat(self.end); //连接两个数组
            let len = arr.length;
            return {
                next(){
                    if(index<len){
                        return{
                            value:arr[index++],
                            done:false //表示当前没有结束
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for (let key of obj) {
        console.log(key);
    }
}