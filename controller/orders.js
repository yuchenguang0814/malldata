const { exec } = require('../db/mysql');

const addQusetions = (data)=>{
  let sql = `insert into orders values (null,'${data.cid}','${data.content}','${data.name}','${data.phone}',null,'${data.isQusetion}')`;
  return exec(sql);
}
module.exports = {
  addQusetions
}