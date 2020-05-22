var express = require('express');

var router = express();

// 引入body-parser：解析post请求体！
const bodyparser = require('body-parser');

// bcrypt 一个帮助您哈希密码的库。
const bcrypt = require('bcrypt');

// json web token
const jwt = require("jsonwebtoken");
// 密钥
const SECRET = "shhhhh";

// authtoken 
const { authtoken } = require('../middlewares/authtoken');

//
/* index api */
router.get('/', function(req, res, next){
    // json
    var code = { code: 200, message: "index" }
    var indexJson = {
        name: "index",
        value:JSON.stringify(code)
    };
    res.send(JSON.stringify(indexJson))
});

// Route parameters
router.get('/params/:query',(req, res)=>{
    res.send(JSON.stringify(req.params));
});

// app.use使用中间机、插件, application/json 解析json
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: false }));



// curl -d "name=123"  -X POST  http://localhost:5000/
// curl -d "name=123" -d "age=23" -X POST  http://localhost:5000/
router.post('/', (req, res)=>{
    // 接收post 参数
    // express 不能直接解析消息体、请求体，需要第三方插件body-parser
    console.dir(req.body)
    var msg = req.body;
    var password = req.body.password;
    var hash_pswd = bcrypt.hashSync(password, 10);
    const pswd_from_db = "$2b$10$2so9VSLPy.QRW.XHIUfNvOnnowYlvdSsCM7S9gWPpT/Cdpem4dnbu";
    console.log("----hash_pswd----", hash_pswd);
    const isPswdValid = bcrypt.compareSync(
        password,
        pswd_from_db
    );

    // 生成token,登录时生成 参数1: payload: string|object|buffer ,  参数2:secretOrPrivateKey:Secret密钥
    const token = jwt.sign(
        {
            id: String(req.body.name)
        },
        SECRET
    );

    if (isPswdValid){
        console.log("密码有效");
        // 
    };
    console.log(JSON.stringify(msg));
    res.send(JSON.stringify({"resBody": req.body, "token": token}));
});

// 如何使用token, 这个authtoken是中间件  authorization: Bearer token
// curl -X  GET  http://localhost:5000/token -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImlhdCI6MTU5MDExODQ1M30.kl5amtgqYFCDGSqOcMcgHkhcnAe3SjFGd8QvFZQcVCs"
router.get('/token', authtoken, (req, res)=>{
    var tokendata = req.user;
    console.log("解密 token", tokendata);
    return res.send('ok');
})

module.exports = router;
