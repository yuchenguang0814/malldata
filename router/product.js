const {getProductsByCid,getProduct,getAllGood} = require("../controller/product");
const productbyC = (req) => {
  const product_list = {}
  return getProductsByCid(req).then(res => {
    product_list['product'] = JSON.parse(JSON.stringify(res))
    return product_list
  })
}
const getProductByid = (req) => {
  const product_list = {}
  return getProduct(req).then(res => {
    product_list['product'] = JSON.parse(JSON.stringify(res))
    return product_list
  })
}
const getGoods = (req) => {
  const product_list = {}
  return getAllGood().then(res => {
    product_list['product'] = JSON.parse(JSON.stringify(res))
    return product_list
  })
}
module.exports ={
  productbyC,
  getProductByid,
  getGoods
}
