const {getPage,getCategory} = require("../controller/page");
const PageRouter = (req)=>{
    const method = req.method;
    //获取页面信息数据
    let page_list = {}
    if(method === "GET" && req.path === "/page/multidata"){     
        return getPage().then(res => {
          page_list["page"] =  JSON.parse(JSON.stringify(res))
        }).then(res =>{
            return getCategory().then(res => {
              page_list["category"] =  JSON.parse(JSON.stringify(res)) 
            })
        }).then(res =>{
            return page_list
        })
    }
    
}
module.exports = PageRouter;