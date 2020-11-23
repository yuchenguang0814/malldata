const {editGoodById} = require("../../controller/admin/goods");

const editGood = (req) => {
  const method = req.method;
  const suc = []
  if(method === "POST" && req.path === "/admin/good"){
    return editGoodById(req.body).then(res => {
      suc['code'] = 200
      suc['message'] = '修改产品成功'
      return suc;
    })
  }
}

module.exports = editGood;