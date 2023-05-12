
const carrinhoProdutos = require('../database/carrinhoProdutos.json')
const { Product } = require('../models')
const {User} = require('../models')

const detalsController  = {
    getProduct: async (req, res) => {
         const { id }= req.params
         
         const product_ = await Product.findOne({ where: { id } })
         
        res.render('detals' , {product: product_,  carrinhoProdutos: carrinhoProdutos})
    }
    
    }
     
    module.exports = detalsController
    
    
    
    