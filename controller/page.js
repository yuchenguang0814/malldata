const { exec} = require('../db/mysql');

const getPage = () => {
  let sql = `select * from page ORDER BY id`;
  return exec(sql);
}
const getPageListId = (req) => {
  let sql = `select * from page WHERE id = ${req.pid}`;
  return exec(sql);
}
const getPageChildListId = (req) => {
  let sql = `select * from category WHERE cid = ${req.pid}`;
  return exec(sql);
}
const getCategory = () => {
  let sql = `select * from category`;
  return exec(sql);
}
const editPageInfoById = (req) => {
  let sql = `UPDATE page SET pageDescription = '${req.pageDescription}',pageImage = '${req.pageImage}',pageKey = '${req.pageKey}' WHERE id = ${req.id}`;
  return exec(sql);
} 
module.exports ={
  getPage,
  getCategory,
  getPageListId,
  editPageInfoById,
  getPageChildListId
}