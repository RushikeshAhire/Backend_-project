const connection =require('./Connection');
const express =require('express');
const bodyParser=require('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');
var app=express();

app.use(bodyParser.json())

app.get('/contact',(req,res)=>{
    connection.query('SELECT * FROM contact',(err,rows)=>{
        if(err)
        console.log(err)
        else
        res.send(rows)

    })
})
    app.get('/contact/:id',(req,res)=>{
        connection.query('SELECT * FROM contact WHERE ID=?',[req.params.id],(err,rows)=>{
            if(err)
            console.log(err)
            else
            res.send(rows)
    
        })
})

app.listen(3000,()=>console.log("Express server is running on 3000 port"));
