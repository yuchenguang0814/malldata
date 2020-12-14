const {getBanner,getGoodCates,getCase,getGoods,getNews} = require("../controller/banner");
const HomeRouter = (req)=>{
    const method = req.method;
    //获取首页数据
    let home_list = {}
    if(method === "GET" && req.path === "/home/multidata"){     
        return getBanner().then(res => {
            home_list["banner"] =  JSON.parse(JSON.stringify(res))
            return getGoodCates().then(res => {
                home_list["goodCates"] =  JSON.parse(JSON.stringify(res)) 
            })
        })
        .then(res => {
            return getCase().then(res => {
                home_list["case"] =  JSON.parse(JSON.stringify(res)) 
            })
        })
        .then(res => {
            return getGoods().then(res => {
                home_list["goods"] =  JSON.parse(JSON.stringify(res)) 
            })
        })
        .then(res => {
            return getNews().then(res => {
                home_list["news"] =  JSON.parse(JSON.stringify(res)) 
            })
        })
        .then(res =>{
            return home_list
        })
    }
    
}
module.exports = HomeRouter;