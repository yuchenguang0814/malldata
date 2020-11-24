const { addCate } = require("../../controller/admin/goodsCate");

const AddCate = (req) => {
  let addobj = {
    code:null,
    message:''
  }
  return addCate(req.body).then(res => {
    if(res.length === 0) {
      addobj.code = 220,
      addobj.message = '添加分类失败'
    } else {
      addobj.code = 200,
      addobj.message = '成功'
    }
    return addobj
  })
}
module.exports ={
    AddCate
}