const { addQusetions } = require("../controller/orders");
const addQusetion = (req) => {
  let addobj = {
    code:null,
    message:''
  }
  return addQusetions(req.body).then(res => {
    if(res.length === 0) {
      addobj.code = 210,
      addobj.message = '添加问题失败'
    } else {
      addobj.code = 200,
      addobj.message = '成功'
    }
    return addobj
  })
}
module.exports ={
  addQusetion
}