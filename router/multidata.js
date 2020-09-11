const {getBanner,} = require("../controller/banner");
const multidataRouter = (req)=>{
    const method = req.method;
    //获取轮播图列表
    let home_list = {}
    if(method === "GET" && req.path === "/home/multidata"){     
        return getBanner().then(res => {
            res = JSON.parse(JSON.stringify(res))
            const imageUrl = [];
            for (let i=0; i < res.length ; ++i){
                imageUrl.push(res[i].imageUrl);
            } 
            home_list["banner"] =  imageUrl
            return home_list
        })
    }
    
}
module.exports = multidataRouter;