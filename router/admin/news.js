const { getNewsList, getTotal}= require("../../controller/admin/news");
const getNews = (req) => {
    const method = req.method;
    let newsList = {}
    if(method === "GET" && req.path === "/admin/news"){
      return getNewsList(req.query).then(res => {
        newsList['news'] = JSON.parse(JSON.stringify(res))
      })
      .then(res => {
        return getTotal(req).then(res => {
          newsList["total"] = JSON.parse(JSON.stringify(res))
        })
      })
      .then(res => {
        return newsList;
      })
    }
  }
  module.exports ={
    getNews
}