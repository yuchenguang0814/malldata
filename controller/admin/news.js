const { exec} = require('../../db/mysql');
const getNewsList = (req) => {
  const page = req.pagenum
  const size = req.pagesize
  const offset = (page-1)*size
  let where = '1 = 1'
  if(req.query != '') {
    const obj = JSON.parse(req.query)
    if(obj.cid) {
      where = where + ' and news.cid =' + obj.cid
    }
  }
  let sql = `SELECT * FROM news Where ${where} ORDER BY createtime DESC limit ${offset},${size}`
  return exec(sql);
}
const getTotal = (req) => {
  let where = '1 = 1'
  if(req.query != '') {
    const obj = JSON.parse(req.query)
    if(obj.cid) {
      where = where + ' and news.cid =' + obj.cid
    }
  }
  let sql = `SELECT count(1) as num FROM news  Where ${where}`
  console.log(sql)
  return exec(sql);
}
const addNews = (req) => {
  let sql = `insert into news values (null,${req.cid},'${req.title}','${req.pageKey}','${req.pageDescription}','${req.author}',null,'${req.content}')`;
  return exec(sql);
}
const getNew = (req) => {
  let sql = `SELECT * FROM news Where id = ${req.id}`
  return exec(sql);
}
const editNewById = (req) => {
  let sql = `UPDATE news SET cid = '${req.cid}',title = '${req.title}',pageKey = '${req.pageKey}',pageDescription = '${req.pageDescription}',author = '${req.author}',content = '${req.content}' WHERE id = ${req.id}`
  return exec(sql);
}
const removeNewById = (req) => {
  let sql = `DELETE FROM news WHERE id = ${req}`  
  return exec(sql);
}
module.exports ={
  getNewsList,
  getTotal,
  addNews,
  getNew,
  editNewById,
  removeNewById
}
