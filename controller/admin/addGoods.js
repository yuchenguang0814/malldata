const { exec} = require('../../db/mysql');

const addGoods = (data)=>{
  let sql = `insert into goods values (null,'${data.goods_cat}','${data.pic}','${data.goods_name}','${data.goods_overview}','${data.goods_advantage}','${data.goods_content}','${data.goods_weight}','${data.goods_dimensions}','${data.goods_key}','${data.goods_description}','${data.goods_title}','${data.goods_ishome}','${data.goods_sort}',null,'${data.vidurl}')`;
  return exec(sql);
}
module.exports ={
  addGoods
}