const SECRET = "shhhhh";

var jwt = require('jsonwebtoken');

// get token of  cookie 

var cookie = require('cookie');


const authtoken = function (req, res, next){
    var cookies = cookie.parse(req.headers.cookie || "");
    console.log('---cookies: ', cookies)
    var authorization = req.headers.authorization;
    // var authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImlhdCI6MTU5MDExODQ1M30.kl5amtgqYFCDGSqOcMcgHkhcnAe3SjFGd8QvFZQcVCs"; // 传递的token
    var token = authorization.split(' ').pop();
    const tokendata = jwt.verify(token, SECRET);
    // console.log("解密 token", tokendata);
    req.user = tokendata;
    req.user = cookies;
    next();

}


module.exports = { authtoken };
