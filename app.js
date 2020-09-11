const express = require('express');
const path = require('path');
const multidataRouter = require("./router/multidata");

const app = express();
app.listen(3000);
console.log("服务启动");
app.use('/public/',express.static(path.join(__dirname,'./public/')));
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
app.get("/home/multidata",(req,res)=>{
    multidataRouter(req).then(suc => {
        res.send({code: 200, message: "Success!", data: suc})
    })
})