const { exec} = require('../db/mysql');
 
 
//获取轮播图列表
const getBanner = ()=>{
    let sql = `select imageUrl,link from banner where 1=1 `;
    //返回的是一个promise
    return exec(sql);
}

const getRecommand = ()=>{
    let sql = `select * from recommand where 1=1 `;
    //返回的是一个promise
    return exec(sql);
}
module.exports ={
    getBanner,
    getRecommand
}