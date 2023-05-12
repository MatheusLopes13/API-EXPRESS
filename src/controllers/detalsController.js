const allProducts = require('../database/allProduct')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')
const { Product } = require('../models')

const detalsController  = {
    getProduct: async (req, res) => {
         let id = req.params.id
         
         const product_ = await Product.findOne({ where: { id } })

         
        res.render('detals' , {product: product_,  carrinhoProdutos: carrinhoProdutos})
    }
    
    }
     
    module.exports = detalsController
    
    
    
    