const {getGoods, getTotal, getGoodsCate} = require("../../controller/admin/goods");

const Goods = (req) => {
  const method = req.method;
  if(method === "GET" && req.path === "/admin/goods"){
    let goodsList = {}
    return getGoods(req).then(res => {
      goodsList["goods"] = JSON.parse(JSON.stringify(res))
    })
    .then(res => {
      return getTotal(req).then(res => {
        goodsList["total"] = (JSON.parse(JSON.stringify(res)))[0].num
      })
    })
    .then(res => {
      return getGoodsCate().then(res => {
        goodsList["goodsCate"] = JSON.parse(JSON.stringify(res))
      })
    })
    .then(res => {
      return goodsList
    })
  }
}

module.exports = Goods;