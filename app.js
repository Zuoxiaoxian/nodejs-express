const express = require('express');


const port = 5000;

// index api
var indexRouter = require('./routes/index');

// user api
var userRouter = require('./routes/user');


const app = express();

app.use('/', indexRouter);

app.use('/user', userRouter);

app.listen(port, ()=>{
    console.log(`访问hocalhost:${port}`)
});


