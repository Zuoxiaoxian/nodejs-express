const SECRET = "shhhhh";

var jwt = require('jsonwebtoken');

const authtoken = function (req, res, next){
    console.log("authorization: ", req.headers.authorization);
    var authorization = req.headers.authorization;
    // var authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImlhdCI6MTU5MDExODQ1M30.kl5amtgqYFCDGSqOcMcgHkhcnAe3SjFGd8QvFZQcVCs"; // 传递的token
    var token = authorization.split(' ').pop();
    const tokendata = jwt.verify(token, SECRET);
    // console.log("解密 token", tokendata);
    req.user = tokendata;
    next();

}


module.exports = { authtoken };
