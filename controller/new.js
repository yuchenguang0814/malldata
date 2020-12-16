const { exec } = require('../db/mysql')
const getAllNew = () => {
  let sql = `SELECT * FROM news`
  return exec(sql)
}
const getNew = (req) => {
  let sql = `SELECT * FROM news where cid = ${req.cid}`
  return exec(sql)
}
const getNewById = (req) => {
  let sql = `SELECT * FROM news where id = ${req.id}`
  return exec(sql)
}
const getPreNew = (req) => {
  let sql = `select * from news where id = (select MAX(id) from news where id < ${req.id})`
  return exec(sql)
}
const getNextNew = (req) => {
  let sql = `select * from news where id = (select MIN(id) from news where id > ${req.id})`
  return exec(sql)
}
const getAllVids = () => {
  let sql = `SELECT * FROM video`
  return exec(sql)
}
const getVid = (req) => {
  let sql = `SELECT * FROM video where id =${req.id}`
  return exec(sql)
}

module.exports = {
  getAllNew,
  getNew,
  getNewById,
  getPreNew,
  getNextNew,
  getAllVids,
  getVid
}