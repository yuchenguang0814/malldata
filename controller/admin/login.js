const { exec} = require('../../db/mysql');


const getLoginUser = (username)=>{
  let sql = `select * from users where username= '${username}'`;
  return exec(sql);
}

const getLogin = (username, password)=>{
  let sql = `select * from users where username= '${username}' and password = '${password}' `;
  return exec(sql);
}

module.exports ={
  getLoginUser,
  getLogin
}