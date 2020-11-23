const {getGoodById} = require("../../controller/admin/goods");

const Good = (req) => {
  const method = req.method;
  const goodList = []
  if(method === "GET" && req.path === "/admin/good"){
    return getGoodById(req.query).then(res => {
      goodList['good'] = JSON.parse(JSON.stringify(res))
      return goodList;
    })
  }
}

module.exports = Good;