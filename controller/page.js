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
  let sql = `select * from category ORDER BY pagePath`;
  return exec(sql);
}
const editPageInfoById = (req) => {
  let sql = `UPDATE page SET pageDescription = '${req.pageDescription}',pageImage = '${req.pageImage}',pageKey = '${req.pageKey}' WHERE id = ${req.id}`;
  return exec(sql);
} 
const editPageChildInfoById = (req) => {
  let sql = `UPDATE category SET pageDescription = '${req.pageDescription}',pageImage = '${req.pageImage}',pageKey = '${req.pageKey}' WHERE cid = ${req.cid}`;
  return exec(sql);
}
const getUser = (req) => {
  let sql = `select * from users where user_id = 1`
  return exec(sql)
}
module.exports ={
  getPage,
  getCategory,
  getPageListId,
  editPageInfoById,
  getPageChildListId,
  editPageChildInfoById,
  getUser
}