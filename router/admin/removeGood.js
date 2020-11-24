const {removeGoodById} = require("../../controller/admin/goods");

const removeGood = (req) => {
  const method = req.method;
  console.log(req.query)
  const suc = []
  if(method === "GET" && req.path === "/admin/removegood"){
    return removeGoodById(req.query.goodsId).then(res => {
      suc['code'] = 200
      suc['message'] = '删除产品成功'
      return suc;
    })
  }
}

module.exports = removeGood;