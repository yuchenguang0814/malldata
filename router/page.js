const {getPage,getCategory,getPageListId,editPageInfoById,getPageChildListId, editPageChildInfoById} = require("../controller/page");
const {getBanner, AddBanners, removeBannerById} = require("../controller/banner");
const PageRouter = (req)=>{
    const method = req.method;
    //获取页面信息数据
    let page_list = {}
    if(method === "GET" && req.path === "/page/multidata"){     
        return getPage().then(res => {
          page_list["page"] =  JSON.parse(JSON.stringify(res))
        }).then(res =>{
            return getCategory().then(res => {
              page_list["category"] =  JSON.parse(JSON.stringify(res)) 
            })
        }).then(res =>{
            return page_list
        })
    } else if (method === "GET" && req.path === "/admin/page"){
      return getPage().then(res => {
        page_list["page"] =  JSON.parse(JSON.stringify(res))
      }).then(res =>{
          return getCategory().then(res => {
            page_list["category"] =  JSON.parse(JSON.stringify(res)) 
          })
      }).then(res =>{
          return page_list
      })
    }
}
const getPageById = (req)=>{
  let page_list = {}
  return getPageListId(req.query).then(res => {
    page_list = JSON.parse(JSON.stringify(res))
    return page_list
  })
}
const getPageChildById = (req)=>{
  let page_list = {}
  return getPageChildListId(req.query).then(res => {
    page_list = JSON.parse(JSON.stringify(res))
    return page_list
  })
}
const getBannerList = (req)=>{
  let banner_list = {}
  return getBanner().then(res => {
    banner_list = JSON.parse(JSON.stringify(res))
    return banner_list
  })
}
const addBanner = (req)=>{
  let suc = []
  return AddBanners(req.body.img).then(res => {
    suc['code'] = 200
    suc['message'] = '添加轮播图成功'
    return suc;
  })
}
const removeBanner = (req)=>{
  let suc = []
  return removeBannerById(req.query.id).then(res => {
    suc['code'] = 200
    suc['message'] = '删除轮播图成功'
    return suc;
  })
}
const editPageInfo = (req) => {
  let suc = []
  return editPageInfoById(req.body).then(res => {
    suc['code'] = 200
    suc['message'] = '修改页面成功'
    return suc;
  })
}
const editPageChildInfo = (req) => {
  let suc = []
  return editPageChildInfoById(req.body).then(res => {
    suc['code'] = 200
    suc['message'] = '修改页面成功'
    return suc;
  })
}

module.exports ={
    PageRouter,
    getPageById,
    getBannerList,
    addBanner,
    removeBanner,
    editPageInfo,
    getPageChildById,
    editPageChildInfo
}