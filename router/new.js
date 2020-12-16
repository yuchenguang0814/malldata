const {getAllNew,getNew,getNewById,getPreNew,getNextNew,getAllVids,getVid} = require("../controller/new");
const getHNews = (req) => {
  const new_list = {}
  return getAllNew().then(res => {
    new_list['new'] = JSON.parse(JSON.stringify(res))
    return new_list
  })
}
const getHNewByid = (req) => {
  const new_list = {}
  return getNew(req.query).then(res => {
    new_list['new'] = JSON.parse(JSON.stringify(res))
    return new_list
  })
}
const gNewByid = (req) => {
  const new_list = {}
  return getNewById(req.query).then(res => {
    new_list['new'] = JSON.parse(JSON.stringify(res))
  })
  .then(res => {
    return getPreNew(req.query).then(res => {
      new_list['pre'] = JSON.parse(JSON.stringify(res))
    })
  })
  .then(res => {
    return getNextNew(req.query).then(res => {
      new_list['next'] = JSON.parse(JSON.stringify(res))
    })
  }).then(res => {
    return new_list
  })
}
const getAllVid = (req) => {
  const vid_list = {}
  return getAllVids().then(res => {
    vid_list['vid'] = JSON.parse(JSON.stringify(res))
    return vid_list
  })
}
const getVidById = (req) => {
  const vid_list = {}
  return getVid(req.query).then(res => {
    vid_list['vid'] = JSON.parse(JSON.stringify(res))
    return vid_list
  })
}
module.exports ={
  getHNews,
  getHNewByid,
  gNewByid,
  getAllVid,
  getVidById
}