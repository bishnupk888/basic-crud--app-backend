const Product  = require('../models/ProductModel')

const getProducts = async (req,res)=>{
    try {
        const products =  await Product.find({})
        res.status(200).json(products)
     } catch (error) {
         res.status(500).json({message:error.message})
     }
}

const getProduct = async(req,res)=>{
    try {
        const {id} =req.params
        const product = await Product.findById(id) 
        res.status(200).json(product)
     } catch (error) {
        res.status(500).json({message:error.message})
     }
}

const addProduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
      } catch (error) {
       res.status(500).json({message: error.message})
       console.error(error)
      }
}
const updateProduct = async (req,res)=> {
    try {
        const {id} = req.params 
        const product = await Product.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"product updated successfully"})
        if(!product){
            res.status(404).json({message:"no product found"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        res.status(200).json({message:" product deleted"})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}