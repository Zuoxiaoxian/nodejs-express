var express = require('express');

var router = express();

// 引入body-parser：解析post请求体！
const bodyparser = require('body-parser');

/* index api */
/*
router.get('/', function(req, res, next){
    // json
    var code = { code: 200, message: "index" }
    var indexJson = {
        name: "index",
        value:JSON.stringify(code)
    };
    res.send(JSON.stringify(indexJson))
});
*/

// app.use使用中间机、插件, application/json 解析json
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: false }));

router.post('/', (req, res)=>{
    // 接收post 参数
    // express 不能直接解析消息体、请求体，需要第三方插件body-parser
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;
