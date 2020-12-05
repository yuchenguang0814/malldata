const { exec} = require('../../db/mysql');
const md5 = require('blueimp-md5');
const md5random = 'yWycs';

const editUsers = (req) => {
  const password = md5(md5(req.password))+md5random
  console.log(req.password)
  console.log(password)
  let sql = `UPDATE users SET name = '${req.name}',password = '${password}',userEmail = '${req.userEmail}',userPhone = '${req.userPhone}',userQQ = '${req.userQQ}',companyName = '${req.companyName}',companyAddress = '${req.companyAddress}',logo = '${req.logo}' WHERE user_id = ${req.user_id}`
  return exec(sql);
}
module.exports ={
  editUsers
}