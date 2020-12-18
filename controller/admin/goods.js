const { exec} = require('../../db/mysql');

const getGoods = (req)=>{
  if(req.query != '') {
    const page = req.query.pagenum
    const size = req.query.pagesize
    const offset = (page-1)*size
    let where = '1 = 1'
    if(req.query.query != '') {
      const obj = JSON.parse(req.query.query)
      if(obj.cid) {
        where = where + ' and goods.c_id =' + obj.cid
      }
    }
    let sql = `SELECT * FROM goods Where ${where} ORDER BY sort limit ${offset},${size}`
    return exec(sql);
  }
}
const getTotal = (req) => {
  let where = '1 = 1'
  if(req.query.query != '') {
    const obj = JSON.parse(req.query.query)
    if(obj.cid) {
      where = where + ' and goods.c_id =' + obj.cid
    }
  }
  let sql = `SELECT count(1) as num FROM goods  Where ${where}`
  return exec(sql);
}
const getGoodsCate = () => {
  let sql = `SELECT cid,pageName FROM category WHERE pageId = 1 ORDER BY pagePath`
  return exec(sql);
}
const getGoodById = (req) => {
  let sql = `SELECT * FROM goods WHERE id = ${req.id}`
  return exec(sql);
}
const editGoodById = (req) => {
  let sql = `UPDATE goods SET c_id = ${req.c_id},image = '${req.pic}',name = '${req.name}',overView = '${req.overView}',advantage = '${req.advantage}',content = '${req.content}',weight = '${req.weight}',dimensions = '${req.dimensions}',pageKey = '${req.pageKey}',pageDescription = '${req.pageDescription}',pageTitle = '${req.pageTitle}',isHome = '${req.isHome}',sort = ${req.sort},add_time = null,vidurl = '${req.vidurl}' WHERE id = ${req.id}`
  return exec(sql);
}
const removeGoodById = (req) => {
  let sql = `DELETE FROM goods WHERE id = ${req}`  
  return exec(sql);
}

module.exports ={
  getGoods,
  getTotal,
  getGoodsCate,
  getGoodById,
  editGoodById,
  removeGoodById
}