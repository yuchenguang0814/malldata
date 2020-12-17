const { getNewsList, getTotal, addNews, getNew, editNewById,removeNewById,getVideosList,getVTotal,addVideos,removeVidById,getVideo}= require("../../controller/admin/news");
const getNews = (req) => {
    const method = req.method;
    let newsList = {}
    if(method === "GET" && req.path === "/admin/news"){
      return getNewsList(req.query).then(res => {
        newsList['news'] = JSON.parse(JSON.stringify(res))
      })
      .then(res => {
        return getTotal(req.query).then(res => {
          newsList["total"] = JSON.parse(JSON.stringify(res))
        })
      })
      .then(res => {
        return newsList;
      })
    }
  }
const addNew = (req) => {
  const method = req.method;
  let addobj = {
    code:null,
    message:''
  }
  if (method === "POST" && req.path === "/admin/news") {
    return addNews(req.body).then(res => {
      if(res.length === 0) {
        addobj.code = 211,
        addobj.message = '添加失败'
      } else {
        addobj.code = 200,
        addobj.message = '添加成功'
      }
      return addobj
    })
  }
}
const getNewById = (req) => {
  const method = req.method;
  let newsList = {}
  if(method === "GET" && req.path === "/admin/new"){
    return getNew(req.query).then(res => {
      newsList['news'] = JSON.parse(JSON.stringify(res))
      return newsList;
    })
  }
}
const editNew = (req) => {
  const method = req.method;
  const suc = []
  if(method === "POST" && req.path === "/admin/new"){
    return editNewById(req.body).then(res => {
      suc['code'] = 200
      suc['message'] = '修改新闻成功'
      return suc;
    })
  }
}
const removeNew = (req) => {
  const method = req.method;
  const suc = []
  if(method === "GET" && req.path === "/admin/removenew"){
    return removeNewById(req.query.id).then(res => {
      suc['code'] = 200
      suc['message'] = '删除新闻成功'
      return suc;
    })
  }
}
const getVideos = (req) => {
  const method = req.method;
  let videosList = {}
  if(method === "GET" && req.path === "/admin/videos"){
    return getVideosList(req.query).then(res => {
      videosList['videos'] = JSON.parse(JSON.stringify(res))
    })
    .then(res => {
      return getVTotal(req.query).then(res => {
        videosList["total"] = JSON.parse(JSON.stringify(res))
      })
    })
    .then(res => {
      return videosList;
    })
  }
}
const addVideo = (req) => {
  const method = req.method;
  let addobj = {
    code:null,
    message:''
  }
  if (method === "POST" && req.path === "/admin/videos") {
    return addVideos(req.body).then(res => {
      if(res.length === 0) {
        addobj.code = 211,
        addobj.message = '添加失败'
      } else {
        addobj.code = 200,
        addobj.message = '添加成功'
      }
      return addobj
    })
  }
}
const getVideoById = (req) => {
  const method = req.method;
  let videoList = {}
  if(method === "GET" && req.path === "/admin/video"){
    return getVideo(req.query).then(res => {
      videoList['video'] = JSON.parse(JSON.stringify(res))
      return videoList;
    })
  }
}
const removeVid = (req) => {
  const method = req.method;
  const suc = []
  if(method === "GET" && req.path === "/admin/removevid"){
    return removeVidById(req.query.id).then(res => {
      suc['code'] = 200
      suc['message'] = '删除视频成功'
      return suc;
    })
  }
}
module.exports ={
  getNews,
  addNew,
  getNewById,
  editNew,
  removeNew,
  getVideos,
  addVideo,
  removeVid,
  getVideoById
}