const {getBanner,getRecommand} = require("../controller/banner");
const multidataRouter = (req)=>{
    const method = req.method;
    //获取首页数据
    let home_list = {}
    if(method === "GET" && req.path === "/home/multidata"){     
        return getBanner().then(res => {
            home_list["banner"] =  JSON.parse(JSON.stringify(res))
            return getRecommand().then(res => {
                home_list["recommand"] =  JSON.parse(JSON.stringify(res)) 
            })
        }).then(res =>{
            return home_list
        })
    }
    
}
module.exports = multidataRouter;