const { exec } = require('../db/mysql')
const getAllNew = () => {
  let sql = `SELECT * FROM news`
  return exec(sql)
}
module.exports = {
  getAllNew
}