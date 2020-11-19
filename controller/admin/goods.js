const { exec} = require('../../db/mysql');

const getGoods = (req)=>{
  const page = req.query.pagenum
  const size = req.query.pagesize
  const offset = (page-1)*size
  let where = '1 = 1'
  if(req.query.query != '') {
    const obj = JSON.parse(req.query.query)
    if(obj.cid) {
      where = where + ' and goods.cid =' + obj.cid
    }
    console.log(where)
  }
  let sql = `SELECT * FROM goods INNER JOIN category ON goods.cid = category.id  Where ${where} ORDER BY sort limit ${offset},${size}`
  console.log(sql)
  return exec(sql);
}
const getTotal = (req) => {
  let where = '1 = 1'
  if(req.query.query != '') {
    const obj = JSON.parse(req.query.query)
    if(obj.cid) {
      where = where + ' and goods.cid =' + obj.cid
    }
    console.log(where)
  }
  let sql = `SELECT count(1) as num FROM goods  Where ${where}`
  console.log(sql)
  return exec(sql);
}
const getGoodsCate = () => {
  let sql = `SELECT id,pageName FROM category WHERE pageId = 1`
  return exec(sql);
}
module.exports ={
  getGoods,
  getTotal,
  getGoodsCate
}