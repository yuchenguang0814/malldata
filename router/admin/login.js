const login = require("../../controller/admin/login");
const {getLogin,getLoginUser} = require("../../controller/admin/login");
const Login = (req)=>{
    const method = req.method;
    let user = {
        code:null,
        message:'',
        data: [],
        session:null
    }
    if(method === "POST" && req.path === "/admin/login"){
        const {username, password} = req.body
        return getLoginUser(username).then(res => {
            if(res.length === 0) {
                user.code = 201
                user.message = '用户名不存在'
                return user
            } else {
                return getLogin(username, password).then(res => {
                    if(res.length === 0) {
                        user.code = 202
                        user.message = '密码错误'
                        return user
                    } else {
                        user.code = 200
                        user.message = '成功'
                        user.data = JSON.parse(JSON.stringify(res))
                        req.session.token = '张三'
                        user.session = req.session.token
                        console.log(user.session)
                        return user
                    }
                })
            }
        })
    }
}
module.exports = Login;