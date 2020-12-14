const {getAllNew} = require("../controller/new");
const getHNews = (req) => {
  const new_list = {}
  return getAllNew().then(res => {
    new_list['new'] = JSON.parse(JSON.stringify(res))
    return new_list
  })
}
module.exports ={
  getHNews
}