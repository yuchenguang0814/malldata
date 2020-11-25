const { addCate, getCateById, editGoodById, removeCateById} = require("../../controller/admin/goodsCate");

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
      addobj.message = '添加分类成功'
    }
    return addobj
  })
}
const EditCate = (req) => {
  let editobj = {
    code:null,
    message:''
  }
  return editGoodById(req.body).then(res => {
    if(res.length === 0) {
      editobj.code = 230,
      editobj.message = '修改分类失败'
    } else {
      editobj.code = 200,
      editobj.message = '修改分类成功'
    }
    return editobj
  })
}
const getCate = (req) => {
  const method = req.method;
  const cateList = []
  if(method === "GET" && req.path === "/admin/cate"){
    return getCateById(req.query).then(res => {
      cateList['cate'] = JSON.parse(JSON.stringify(res))
      return cateList;
    })
  }
}
const removeCate = (req) => {
  const method = req.method;
  console.log(req.query)
  const suc = []
  if(method === "GET" && req.path === "/admin/removecate"){
    return removeCateById(req.query.cid).then(res => {
      suc['code'] = 200
      suc['message'] = '删除分类成功'
      return suc;
    })
  }
}
module.exports ={
    AddCate,
    getCate,
    EditCate,
    removeCate
}