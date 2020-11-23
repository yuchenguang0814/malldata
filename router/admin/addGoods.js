const { addGoods } = require("../../controller/admin/addGoods");

const AddGood = (req) => {
  let addobj = {
    code:null,
    message:''
  }
  return addGoods(req.body).then(res => {
    if(res.length === 0) {
      addobj.code = 210,
      addobj.message = '添加商品失败'
    } else {
      addobj.code = 200,
      addobj.message = '成功'
    }
    return addobj
  })
}

module.exports = AddGood;