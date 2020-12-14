const { exec} = require('../../db/mysql');

const getGoodsCate = ()=>{
  let sql = `SELECT * FROM category WHERE pageId = 1 ORDER BY pagePath`
  return exec(sql);
}

const addCate = (data)=>{
  let sql = `insert into category values (null,'${data.pageId}','${data.pageName}','${data.pagePath}','${data.pageImage}','${data.pageTitleImage}','${data.pageDescription}','${data.pageKey}')`;
  return exec(sql);
}
const getCateById = (req) => {
  let sql = `SELECT * FROM category WHERE cid = ${req.id} ORDER BY pagePath`
  return exec(sql);
}
const editGoodById = (req) => {
  let sql = `UPDATE category SET pageId = '${req.pageId}',pageName = '${req.pageName}',pagePath = '${req.pagePath}',pageImage = '${req.pageImage}',pageTitleImage = '${req.pageTitleImage}',pageDescription = '${req.pageDescription}',pageKey = '${req.pageKey}' WHERE cid = ${req.cid}`
  return exec(sql);
}
const removeCateById = (req) => {
  let sql = `DELETE FROM category WHERE cid = ${req}`  
  return exec(sql);
}
module.exports ={
  getGoodsCate,
  addCate,
  getCateById,
  editGoodById,
  removeCateById
}
