{
   
    //模拟ajax请求
    let ajax = function(callback){
       // console.log('执行');
        setTimeout(function(){
            callback && callback.call();
            //先判断存在，在执行下一步
        },1000);
    };
    ajax(function(){
       // console.log('timeout1');
    })
}
{
 // Promise 解决异步操作问题
 let ajax = function(){
  //  console.log('ajax执行');
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },1000);
    })
 };
 ajax().then(function(){
   //  console.log('promise','timeout2');
 });

}
{
    let ajax = function(){
      //  console.log('ajax执行3');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000);
        })
     };
     ajax().
        then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },2000);
        });
    })
     .then(function(){
     //   console.log('timeout3');
     })
}
{
    let ajax = function(num){
        console.log('执行4');
        return new Promise(function(resolve,reject){
            if(num>=5){
                resolve()
            }else{
                throw new Error('出错了');
            }
        })
    }
    ajax(2).then(function(){
        console.log('log',2);
    }).catch(function(err){
        console.log('error',err); //捕获错误
    })
}
//promise .all
{
    //所有图片加载完再添加到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = ()=>resolve(img);

            img.onerror = (err)=>{return reject(err)} 
        })
    }
    function showImgs(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }
    Promise.all([
        loadImg('https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c71cf210d8.jpg'),
        loadImg('https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg')
    ]).then(showImgs) //只有当在前面的图片加载完成正确以后，后面的图片才会加载，若前面出错，则后面不加载
}
{
    //图片优先显示
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = ()=>resolve(img);

            img.onerror = (err)=>{return reject(err)} 
        })
    }

    function showImgs(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c71cf210d8.jpg'),
        loadImg('https://img12.360buyimg.com/jrpmobile/jfs/t1/19037/8/10380/37518/5c862ba2Ec8e629f7/6c4f8c721cf210d8.jpg')
    ]).then(showImgs) //先来先服务
}