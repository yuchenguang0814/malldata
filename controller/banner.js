const { exec} = require('../db/mysql');

//获取轮播图列表
const getBanner = ()=>{
    let sql = `select * from banners where 1=1 `;
    //返回的是一个promise
    return exec(sql);
}
const getGoodCates = () => {
    let sql = `SELECT * FROM category WHERE pageId = 1 ORDER BY pagePath`
    return exec(sql)
}

const getCase = () => {
    let sql = `SELECT * FROM cases`
    return exec(sql)
}
const getGoods = () => {
    let sql = `SELECT * FROM goods where isHome = '是'`
    return exec(sql)
}
const AddBanners = (req) => {
    let sql = `insert into banners values (null,'${req}')`
    return exec(sql)
}
const removeBannerById = (req) => {
    let sql = `DELETE FROM banners WHERE id = ${req}`  
    return exec(sql);
}
const getNews = (req) => {
    let sql = `SELECT * FROM news order by createtime DESC`  
    return exec(sql);
}

module.exports ={
    getBanner,
    getGoodCates,
    getCase,
    getGoods,
    AddBanners,
    removeBannerById,
    getNews
}