const express = require('express')
const router = express.Router()
const Product = require('../models/ProductModel')
const productController = require('../controller/product.controller')


router.get('/',productController.getProducts)
router.post('/',productController.addProduct)
router.get('/:id',productController.getProduct)
router.put('/:id',productController.updateProduct)
router.delete('/:id',productController.deleteProduct)

module.exports = router