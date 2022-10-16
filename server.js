const express = require('express')
const { dirname } = require('path')
const path = require('path')
const app = express()
const port = 3001
const fs= require("fs");

const dbS=require("./db.js")

const bodyParser = require('body-parser')
const { default: dbsend } = require('./db')

app.use(bodyParser.urlencoded({extended: true}));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./HTML.html'))
})

app.post('/check',function(req,res){
 
 var n= String(req.body.name1);

res.send("Your username is " + n);
dbS. dbsend(n);

})


app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})