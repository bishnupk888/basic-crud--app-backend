const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT = 3000
const productRoute = require('./routes/product.route')


app.use('/api/products',productRoute)


app.get('/',(req,res)=>{
    res.send("home page")
}) 

// app.get('/api/products/:id',async (req,res)=>{
//  try {
//     const {id} =req.params
//     const product = await Product.findById(id) 
//     res.status(200).json(product)
//  } catch (error) {
//     res.status(500).json({message:error.message})
//  }
// })  
   
// app.post('/api/products',async (req,res)=>{ 
//    try {
//      const product = await Product.create(req.body)
//      res.status(200).json(product)
//    } catch (error) {
//     res.status(500).json({message: error.message})
//     console.error(error)
//    }
// })    

// app.put('/api/products/:id',async(req,res)=>{
//     const {id} = req.params
//     const product = await Product.findByIdAndUpdate(id, req.body)
//     if(!product){
//         return res.status(404).json({message:"product not found"})
//     }
//     const updatedProduct = await Product.findById(id)
//     res.status(200).json(updatedProduct)
// })

 
mongoose.connect("mongodb+srv://bishnupk888:HdHbJlLghhit3jPh@dbapi.aeovmfi.mongodb.net/").then(()=>{
    console.log("connected to db");
    app.listen(PORT,()=>{
        console.log("server is connected");
        })
})
.catch((err)=>{
    console.log(err);
})       
    
   
       