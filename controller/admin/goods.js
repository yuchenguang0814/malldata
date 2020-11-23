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
    let sql = `SELECT * FROM goods INNER JOIN category ON goods.c_id = category.cid  Where ${where} ORDER BY sort limit ${offset},${size}`
    return exec(sql);
  }
  console.log(obj)
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
  let sql = `SELECT id,pageName FROM category WHERE pageId = 1`
  return exec(sql);
}
const getGoodById = (req) => {
  let sql = `SELECT * FROM goods WHERE id = ${req.id}`
  return exec(sql);
}
module.exports ={
  getGoods,
  getTotal,
  getGoodsCate,
  getGoodById
}