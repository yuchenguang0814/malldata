const { exec} = require('../db/mysql');

const getSeo = () => {
  let sql = `SELECT page.id,page.pageDescription, page.pageKey, page.pageName from page UNION ALL SELECT category.pageId,category.pageDescription,category.pageKey,category.pageName FROM category`;
  return exec(sql);
}
module.exports ={
  getSeo
}