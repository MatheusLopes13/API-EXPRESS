const allProducts = require('../database/allProduct')


const detalsController = {
    getProduct: (req, res) => {
         let id = req.params.id
         let product = allProducts.find((item) => {
            return item.id == id
         })
         console.log(product)
        res.render('detals' , {product})
    }
    
    
    }
    
    module.exports = detalsController
    
    
    
    