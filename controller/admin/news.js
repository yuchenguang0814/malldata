const { exec} = require('../../db/mysql');
const getNewsList = (req) => {
  const page = req.pagenum
  const size = req.pagesize
  const offset = (page-1)*size
  let where = '1 = 1'
  let sql = `SELECT * FROM news Where ${where} ORDER BY createtime limit ${offset},${size}`
  return exec(sql);
}
const getTotal = (req) => {
  let where = '1 = 1'
  // if(req.query != '') {
  //   const obj = JSON.parse(req.query)
  //   if(obj.cid) {
  //     where = where + ' and goods.c_id =' + obj.cid
  //   }
  // }
  let sql = `SELECT count(1) as num FROM news  Where ${where}`
  return exec(sql);
}
module.exports ={
  getNewsList,
  getTotal
}
