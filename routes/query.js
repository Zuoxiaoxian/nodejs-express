const { Pool, Client } = require('pg');

const config = require('config');


const db = config.get("Configs.dbConfig");

const pool = new Pool(db);

const express = require('express');
var query = express();
// Route parameters
query.get('/:q',(req, res)=>{
    // res.send(JSON.stringify(req.params));
    var q = req.params.q;
    var sql = `SELECT ${q} FROM demo`;
    pool.query(sql, (err, result)=>{
        if (err == undefined){
            res.send(JSON.stringify(result.rows));
        }else{
            res.send(JSON.stringify({code: 400, msg: `字段${q}不存在`}));
        }
        // console.log('\nerr:\n',err, '\nres\n', result.rows);
        console.log("------------------------------------");
    });
    
    // pool.end();
})

/*
pool.query('SELECT * FROM demo', (err, res)=>{
    console.log('\nerr:\n',err, '\nres\n', res.rows);

    console.log("------------------------------------");
    pool.end();
})
*/

module.exports = query;
