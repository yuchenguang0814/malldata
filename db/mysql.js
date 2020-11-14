const mysql = require('mysql')
const{ MYSQL_CONF } = require('../conf/db');

//创建连接对象
let pool=mysql.createPool(MYSQL_CONF);
// const con =mysql.createConnection(MYSQL_CONF);
// let connection = null
// const con = function(){
//     connection = mysql.createConnection(MYSQL_CONF)
//     connection.connect()
//     connection.on('error',err=>{
//         console.log('Re-connecting lost connection: ');
//         connection = mysql.createConnection(MYSQL_CONF)

//     })
//     return function(){
//         return connection
//     }
// }

//统一执行sql的函数
function exec(sql){
    const promise = new Promise((resolve, reject)=>{
        pool.getConnection(function(err,connect){//通过getConnection()方法进行数据库连接
            if(err){
                console.log(`mysql链接失败${err}`);
            }else{
                pool.query(sql,(err, result) =>{
                    if(err){
                        reject(err);
                        console.log(err)
                        return;
                    }
                    resolve(result);
                    connect.release();//释放连接池中的数据库连接
                     //pool.end();//关闭连接池
                })
            }
        })
    })
    return promise;
}
 
module.exports = {
    exec
}