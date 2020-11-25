const express = require('express');
const path = require('path');
const HomeRouter = require("./router/home");
const PageRouter = require("./router/page");
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

const app = express();
const bodyParser = require('body-parser');
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

app.post("/admin/login",(req,res)=>{
  Login(req).then(suc => {
    res.send({code: suc.code, message: suc.message, data: suc.data, session: suc.session})
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
