// const tenisProduct = require('../database/productTenis.json')
// const carrinhoProdutos = require('../database/carrinhoProdutos.json')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')
const {Op } = require('sequelize')
const {Product,ProductType} = require('../models')


const teniscontroller = {
    tenis: async (req, res) => {
      
        const produto = await Product.findAll({
            include:{
                model: ProductType,
                as: 'productType',
                required: true,
                where:{
                    id:2
                }
            }
            
        })
        console.log(produto)
        res.render('tenis', {allProducts: produto , carrinhoProdutos: carrinhoProdutos } ) 
      }        
        
    
}

module.exports = teniscontroller