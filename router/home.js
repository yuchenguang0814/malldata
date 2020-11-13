const {getBanner} = require("../controller/banner");
const HomeRouter = (req)=>{
    const method = req.method;
    //获取首页数据
    let home_list = {}
    if(method === "GET" && req.path === "/home/multidata"){     
        return getBanner().then(res => {
            home_list["banner"] =  JSON.parse(JSON.stringify(res))
        //     return getPage().then(res => {
        //         home_list["page"] =  JSON.parse(JSON.stringify(res)) 
        //     })
        // }).then(res =>{
        //     return getCategory().then(res => {
        //         home_list["category"] =  JSON.parse(JSON.stringify(res)) 
        //     })
        }).then(res =>{
            return home_list
        })
    }
    
}
module.exports = HomeRouter;