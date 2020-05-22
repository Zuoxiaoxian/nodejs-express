var express = require('express');

var router = express();

// 引入body-parser：解析post请求体！
const bodyparser = require('body-parser');

// bcrypt 一个帮助您哈希密码的库。
const bcrypt = require('bcrypt');


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
router.get('/:query',(req, res)=>{
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
    console.log("----hash_pswd----", hash_pswd);
    console.log(JSON.stringify(msg));
    res.send(req.body);
});

module.exports = router;
