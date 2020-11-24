const { exec} = require('../../db/mysql');

const getGoodsCate = ()=>{
  let sql = `SELECT * FROM category WHERE pageId = 1`
  return exec(sql);
}

module.exports ={
  getGoodsCate
}
