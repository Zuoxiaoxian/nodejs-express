/*    Middleware function logger       */
var logger = function(req, res, next){
    req.requestTime = Date.now();
    console.log(Date(req.requestTime), "\tLOGGED:"," hostname=>", req.hostname, " originalUrl=>", req.originalUrl,
        " params=>", req.params,
    "\n");
    next();
};

module.exports = logger;
