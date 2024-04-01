const express = require("express")
const mongoose = require("mongoose")
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT = 3000
const productRoute = require('./routes/product.route')

app.use('/api/products',productRoute)
app.get('/',(req,res)=>{
    res.send("home page")
}) 

 
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to db");
    app.listen(PORT,()=>{
        console.log("server is connected");
        })
})
.catch((err)=>{
    console.log(err);
})       
    
   
    