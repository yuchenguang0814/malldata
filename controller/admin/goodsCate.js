const { exec} = require('../../db/mysql');

const getGoodsCate = ()=>{
  let sql = `SELECT * FROM category WHERE pageId = 1`
  return exec(sql);
}

const addCate = (data)=>{
  let sql = `insert into goods values (null,'${data.pageId}','${data.pageName}','${data.pagePath}','${data.pageImage}','${data.pageTitleImage}','${data.pageDescription}','${data.pageKey}')`;
  return exec(sql);
}

module.exports ={
  getGoodsCate,
  addCate
}
