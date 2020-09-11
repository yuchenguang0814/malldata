const { exec} = require('../db/mysql');
 
 
//获取轮播图列表
const getBanner = ()=>{
    let sql = `select imageUrl from banner where 1=1 `;
    //返回的是一个promise
    return exec(sql);
}
module.exports ={
    getBanner
}