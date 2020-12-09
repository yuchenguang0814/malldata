const { exec } = require('../db/mysql')

const getProductsByCid = (req) => {
  const id = req.query.id
  let sql = `SELECT * FROM goods where c_id = ${id}`
  return exec(sql)
} 
module.exports = {
  getProductsByCid
}
