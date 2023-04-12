const allProducts = require('../database/allProduct')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')


const detalsController = {
    getProduct: (req, res) => {
         let id = req.params.id
         let product = allProducts.find((item) => {
            return item.id == id
         })
         
        res.render('detals' , {product: product,  carrinhoProdutos: carrinhoProdutos})
    }
    
    }
    
    module.exports = detalsController
    
    
    
    