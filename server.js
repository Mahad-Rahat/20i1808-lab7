


const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const User = require('../Model/user.js')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Mern-APP')

app.post('/Login',  async(req, res) => {

console.log(req.body)    

try{

     await User.Create({

        username : req.body.username,
       
    })
    res.json({status : 'ok'})


} catch (err){

    res.json({status : 'error', error : 'Duplicate Email'})

}



})

app.listen (3001, () => {

console.log('Server running on 3001')

})