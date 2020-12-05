
const {editUsers} = require("../../controller/admin/user");
const EditUser = (req) => {
  const method = req.method;
  const suc = []
  if(method === "POST" && req.path === "/admin/user"){
    return editUsers(req.body).then(res => {
      suc['code'] = 200
      suc['message'] = '修改用户信息成功'
      return suc;
    })
  }
}

module.exports = EditUser;