import $ from 'jquery';

class Interface{

    /**
     *  获取遗漏数据 ,还未开过奖的号码
     * @param {string} issue 当前期号
     * @return {[type]}  [description]
     */
    getOmit(issue){
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOmit(res.data);
                    resolve.call(self,res)
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }

    /**
     * 获取开奖期号
     * @param {string} issue {期号}
     * @return {[type]} [description]
     */
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOpenCode(res.data);
                    resolve.call(self,res) 
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
    /**
     * 获取期号状态
     * @param {string} issue {[期号]}
     * @return {[type]} 
     */
    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    resolve.call(self,res) 
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
}
export default Interface