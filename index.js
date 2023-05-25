const express=require('express')
const mongoose=require('mongoose')
const app=express()
// const router=require('./App/BlogRoutes')


const bodyParser = require('body-parser');

app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/blog-app').then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})
// router(app)
app.listen('3001',()=>{
    console.log('listen at 3001')
})