
const allProducts = require('../database/allProduct.json')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')


const homeController = {
home: (req, res) => {
    res.render('home' , {allProducts: allProducts, carrinhoProdutos: carrinhoProdutos } )
    
}, 

search: (req, res) => {
    let search = req.query.keywords
    console.log(search)
    
    let result = allProducts.filter((item) => {
      return item.nome == search
    })
    console.log(result)
    res.render('search', {product: result })
    
    
  
}

}

module.exports = homeController