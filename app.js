const express = require('express');


const port = 5000;

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


app.listen(port, ()=>{
    console.log(`访问hocalhost:${port}`)
});


