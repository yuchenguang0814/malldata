const { exec} = require('../db/mysql');

const getSeo = () => {
  let sql = `SELECT page.pageDescription, page.pageKey, page.pageName from page UNION ALL SELECT category.pageDescription,category.pageKey,category.pageName FROM category`;
  return exec(sql);
}
module.exports ={
  getSeo
}