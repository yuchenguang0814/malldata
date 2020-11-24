const { exec} = require('../db/mysql');

//获取轮播图列表
const getBanner = ()=>{
    let sql = `select * from banners where 1=1 `;
    //返回的是一个promise
    return exec(sql);
}
const getGoodCates = () => {
    let sql = `SELECT * FROM category WHERE pageId = 1`
    return exec(sql)
}

const getCase = () => {
    let sql = `SELECT * FROM cases`
    return exec(sql)
}
const getGoods = () => {
    let sql = `SELECT * FROM goods`
    return exec(sql)
}

module.exports ={
    getBanner,
    getGoodCates,
    getCase,
    getGoods
}