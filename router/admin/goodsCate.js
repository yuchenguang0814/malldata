const { getGoodsCate } = require("../../controller/admin/goodsCate");

const GoodsCate = (req)=>{
  const method = req.method;
  if(method === "GET" && req.path === "/admin/goodsCate"){  
    const cateList = {}
    return getGoodsCate().then(res => {
      cateList['cate'] = JSON.parse(JSON.stringify(res))
      return cateList
    })
  } 
}

module.exports = GoodsCate