/*    Middleware function logger       */
var logger = function(req, res, next){
    console.log("LOGGED:"," hostname=>", req.hostname, " originalUrl=>", req.originalUrl,
        " params=>", req.params,
    "\n");
    next();
};

module.exports = logger;
