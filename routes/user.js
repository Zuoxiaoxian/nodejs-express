var express = require('express');

var router = express();

/* user api */

router.get('/', function(req, res){
    // JSON
    var value  = JSON.stringify(
        {
            code: 200,
            message:{ name: 'zxx', age: 22, sex: 'Nan', isOk: true }
        }
    )
    var user = {
        name: 'user',
        value: value
    }
    res.send(JSON.stringify(user));
})


module.exports = router;
