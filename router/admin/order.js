const {getOrdersList,getTotal,removeOrderById,getOrderById,editOrderById}= require("../../controller/orders");
const getOrders = (req) => {
  const method = req.method;
  let orderList = {}
  if(method === "GET" && req.path === "/admin/orders"){
    return getOrdersList(req.query).then(res => {
      orderList['order'] = JSON.parse(JSON.stringify(res))
    })
    .then(res => {
      return getTotal(req.query).then(res => {
        orderList["total"] = JSON.parse(JSON.stringify(res))
      })
    })
    .then(res => {
      return orderList;
    })
  }
}
const removeOrder = (req) => {
  const method = req.method;
  const suc = []
  if(method === "GET" && req.path === "/admin/removeorder"){
    return removeOrderById(req.query.id).then(res => {
      suc['code'] = 200
      suc['message'] = '删除留言成功'
      return suc;
    })
  }
}
const getOrder = (req) => {
  const method = req.method;
  let List = {}
  if(method === "GET" && req.path === "/admin/order"){
    return getOrderById(req.query).then(res => {
      List['order'] = JSON.parse(JSON.stringify(res))
      return List;
    })
  }
}
const editOrder = (req) => {
  const method = req.method;
  const suc = []
  if(method === "POST" && req.path === "/admin/order"){
    return editOrderById(req.body).then(res => {
      suc['code'] = 200
      suc['message'] = '回复成功'
      return suc;
    })
  }
}
module.exports ={
    getOrders,
    removeOrder,
    getOrder,
    editOrder
}