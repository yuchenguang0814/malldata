const { exec} = require('../../db/mysql');
const md5 = require('blueimp-md5');
const md5random = 'yWycs';

const getLoginUser = (username)=>{
  let sql = `select * from users where username= '${username}'`;
  return exec(sql);
}

const getLogin = (username, pass)=>{
  console.log(pass)
  const password = md5(md5(pass))+md5random
  console.log(password)
  let sql = `select * from users where username= '${username}' and password = '${password}' `;
  return exec(sql);
}

module.exports ={
  getLoginUser,
  getLogin
}