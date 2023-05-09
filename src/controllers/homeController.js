
// const allProducts = require('../database/allProduct.json')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')

const {Product} = require('../models')

const homeController = {
home: async (req, res) => {
  try {
    const produto = await Product.findAll()

    res.render('home' , {allProducts: produto , carrinhoProdutos: carrinhoProdutos } ) 
  } catch (error) {
    res.status(400).json({ error })
    
  }
   
    
}, 


search: (req, res) => {
    let search = req.query.keywords
    
    let result = allProducts.filter((item) => {
      return item.nome.toLowerCase().includes(search)
    })

    res.render('search', {product: result })
    
}

}

module.exports = homeController