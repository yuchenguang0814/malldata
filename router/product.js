const {getProductsByCid} = require("../controller/product");
const productbyC = (req) => {
  const product_list = {}
  return getProductsByCid(req).then(res => {
    product_list['product'] = JSON.parse(JSON.stringify(res))
    return product_list
  })
}
module.exports ={
  productbyC
}
