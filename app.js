const express = require('express');

// parse configs
const config = require('config');

const port = config.get('Configs.api.port');

//is not client pg
const isnotclient = config.get('Configs.isnotclient');

//const port = 5000;

// index api
var indexRouter = require('./routes/index');

// user api
var userRouter = require('./routes/user');

// middleware logger
var logger = require('./middlewares/logger');



const app = express();
// add middleware
app.use(logger); 

// add router
app.use('/', indexRouter);

app.use('/user', userRouter);


var morgan = require('morgan');
app.use(morgan('combined'))

// 是否连接pg
if (!isnotclient){
    var queryRouter = require('./routes/query');
    app.use('/query', queryRouter);
};


// console.log("query", query)


app.listen(port, ()=>{

    console.log(`访问hocalhost:${port}`)
});


