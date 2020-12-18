const { exec } = require('../db/mysql');

const addQusetions = (data)=>{
  let sql = `insert into orders values (null,'${data.cid}','${data.content}','${data.name}','${data.phone}',null,'${data.isQusetion}',null)`;
  return exec(sql);
}
const getOrdersList = (req)=>{
  const page = req.pagenum
  const size = req.pagesize
  const offset = (page-1)*size
  const obj = JSON.parse(req.query)
  let where = 'where 1 = 1'
  if (obj.id === -1) {
    where = where + ' and isQusetion = 1 or isQusetion = 2'
  } else {
    where = where + ` and isQusetion = ${obj.id}`
  }
  let sql = `SELECT * FROM orders ${where} ORDER BY createtime DESC limit ${offset},${size}`
  return exec(sql);
}
const getTotal = (req)=>{
  const obj = JSON.parse(req.query)
  let where = 'where 1 = 1'
  if (obj.id === -1) {
    where = where + ' and isQusetion = 1 or isQusetion = 2'
  } else {
    where = where + ` and isQusetion = ${obj.id}`
  }
  let sql = `SELECT count(1) as num FROM orders ${where}`
  return exec(sql);
}
const removeOrderById = (req) => {
  let sql = `DELETE FROM orders WHERE id = ${req}` 
  return exec(sql);
}
const getOrderById = (req) => {
  let sql = `SELECT * FROM orders Where id = ${req.id}`
  return exec(sql);
}
const editOrderById = (req) => {
  let sql = `UPDATE orders SET isQusetion = '${req.isQusetion}',answerContent = '${req.answerContent}',isQusetion = '${req.isQusetion}' WHERE id = ${req.id}`
  return exec(sql);
}
module.exports = {
  addQusetions,
  getOrdersList,
  getTotal,
  removeOrderById,
  getOrderById,
  editOrderById
}