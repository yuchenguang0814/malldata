const express = require('express');
const path = require('path');
const HomeRouter = require("./router/home");
const { productbyC,getProductByid, getGoods } = require("./router/product")
const { getHNews} = require("./router/new")
const { PageRouter, getPageById, getBannerList, addBanner, removeBanner, editPageInfo, getPageChildById, editPageChildInfo } = require("./router/page");
const SeoRouter = require("./router/seo");
const Login = require("./router/admin/login");
const Goods = require("./router/admin/goods");
const GoodsCates = require("./router/admin/goodsCate");
const uploadPic = require("./router/api/upload")
const addGood = require("./router/admin/addGoods")
const getGood = require("./router/admin/getGoodById")
const editGood = require("./router/admin/editGood")
const removeGood = require("./router/admin/removeGood")
const { AddCate, getCate, EditCate, removeCate} = require('./router/admin/cates');
const EditUser = require("./router/admin/user");
const { getNews,addNew, getNewById,editNew } = require("./router/admin/news");

const app = express();
const bodyParser = require('body-parser');
const { getBanner } = require('./controller/banner');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.listen(3000);
console.log("服务启动");
app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/uploads/',express.static(path.join(__dirname,'./uploads/')));
app.use("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
      res.send(200)
    } else {
      next()
    }
  })
app.post("/upload",(req,res) => {
  uploadPic(req, res)
})

app.get("/home/multidata",(req,res)=>{
  HomeRouter(req).then(suc => {
        res.send({code: 200, message: "Success!", data: suc})
    })
})
app.get("/page/multidata",(req,res)=>{
  PageRouter(req).then(suc => {
      res.send({code: 200, message: "Success!", data: suc})
  })
})
app.get("/seo/multidata",(req,res)=>{
  SeoRouter(req).then(suc => {
      res.send({code: 200, message: "Success!", data: suc})
  })
})
app.get("/productbyC", (req,res) => {
  productbyC(req).then(suc => {
    res.send({code: 200, message: "Success!", data: suc})
  })
})
app.get("/product", (req,res) => {
  getProductByid(req).then(suc => {
    res.send({code: 200, message: "Success!", data: suc})
  })
})
app.get("/goods", (req,res) => {
  getGoods(req).then(suc => {
    res.send({code: 200, message: "Success!", data: suc})
  })
})
app.get("/news", (req,res) => {
  getHNews(req).then(suc => {
    res.send({code: 200, message: "Success!", data: suc})
  })
})
app.get("/admin/news",(req,res) => {
  getNews(req).then(suc => {
    res.send({code:200, message: '成功', data: suc})
  })
})
app.post("/admin/news",(req,res) => {
  addNew(req).then(suc => {
    res.send({code: suc.code, message: suc.message})
  })
})
app.get("/admin/new",(req,res) => {
  getNewById(req).then(suc => {
    res.send({code:200, message: '成功', data: suc})
  })
})
app.post("/admin/new",(req,res) => {
  editNew(req).then(suc => {
    res.send({code: suc.code, message: suc.message})
  })
})
app.get("/admin/page",(req,res)=>{
  PageRouter(req).then(suc => {
      res.send({code: 200, message: "Success!", data: suc})
  })
})
app.post("/admin/page",(req,res)=>{
  editPageInfo(req).then(suc => {
      res.send({code: suc.code, message: suc.message })
  })
})
app.get("/admin/getpage",(req,res)=>{
  getPageById(req).then(suc => {
      res.send({code: 200, message: "Success!", data: suc})
  })
})
app.get("/admin/getpagechild",(req,res)=>{
  getPageChildById(req).then(suc => {
      res.send({code: 200, message: "Success!", data: suc})
  })
})
app.post("/admin/pagechild",(req,res)=>{
  editPageChildInfo(req).then(suc => {
    res.send({code: suc.code, message: suc.message })
})
})
app.get("/admin/banner",(req,res)=>{
  getBannerList(req).then(suc => {
    res.send({code: 200, message: "Success!", data: suc})
  })
})
app.get("/admin/removebanner",(req,res)=>{
  removeBanner(req).then(suc => {
    res.send({code: suc.code, message: suc.message})
  })
})
app.post("/admin/banner",(req,res)=>{
  addBanner(req).then(suc => {
    res.send({code: suc.code, message: suc.message})
  })
})
app.post("/admin/login",(req,res)=>{
  Login(req).then(suc => {
    res.send({code: suc.code, message: suc.message, data: suc.data, session: suc.session})
  })
})
app.post("/admin/user",(req,res)=>{
  EditUser(req).then(suc => {
    res.send({code: suc.code, message: suc.message, userInfo: suc})
  })
})
app.get("/admin/cate",(req,res)=>{
  getCate(req).then(suc => {
    res.send({code:200, message: '成功', data: suc.cate})
  })
})
app.post("/admin/cate",(req,res)=>{
  AddCate(req).then(suc => {
    res.send({code: suc.code, message: suc.message})
  })
})
app.post("/admin/editcate",(req,res)=>{
  EditCate(req).then(suc => {
    res.send({code: suc.code, message: suc.message})
  })
})
app.get("/admin/removecate",(req,res)=>{
  removeCate(req).then(suc => {
    res.send({code:suc.code, message: suc.message})
  })
})
app.post("/admin/goods",(req,res)=>{
  addGood(req).then(suc => {
    res.send({code: suc.code, message: suc.message})
  })
})
app.get("/admin/goods",(req,res)=>{
  Goods(req).then(suc => {
    res.send({code:200, message: '成功', data: suc})
  })
})
app.get("/admin/good",(req,res)=>{
  getGood(req).then(suc => {
    res.send({code:200, message: '成功', data: suc.good})
  })
})
app.post("/admin/good",(req,res)=>{
  editGood(req).then(suc => {
    res.send({code:suc.code, message: suc.message})
  })
})
app.get("/admin/removegood",(req,res)=>{
  removeGood(req).then(suc => {
    res.send({code:suc.code, message: suc.message})
  })
})
app.get("/admin/goodsCate",(req,res)=>{
  GoodsCates(req).then(suc => {
    res.send({code:200, message: '成功', data: suc})
  })
})
