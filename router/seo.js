const {getSeo} = require("../controller/seo");
const SeoRouter = (req)=>{
    const method = req.method;
    //获取页面信息数据
    let seo_list = {}
    if(method === "GET" && req.path === "/seo/multidata"){     
        return getSeo().then(res => {
            seo_list["seo"] =  JSON.parse(JSON.stringify(res))
        }).then(res =>{
            return seo_list
        })
    }
    
}
module.exports = SeoRouter;