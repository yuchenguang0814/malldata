const { exec} = require('../db/mysql');

const getPage = () => {
  let sql = `select * from page ORDER BY id`;
  return exec(sql);
}
const getPageListId = (req) => {
  let sql = `select * from page WHERE id = ${req.pid}`;
  return exec(sql);
}
const getCategory = () => {
  let sql = `select * from category`;
  return exec(sql);
}
module.exports ={
  getPage,
  getCategory,
  getPageListId
}