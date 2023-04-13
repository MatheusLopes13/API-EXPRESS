
const allProducts = require('../database/allProduct.json')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')
const tenisProduct = require('../database/productTenis.json')


const homeController = {
home: (req, res) => {
    res.render('home' , {allProducts: allProducts, carrinhoProdutos: carrinhoProdutos } )
    
}, 

search: (req, res) => {
    let search = req.query.keywords

      if (search == ('new')) {
        let result = tenisProduct.filter((item) => {
          return item.nome.toLowerCase().includes(search)
        })    
        res.render('search', {product: result })              
          
      } 

      if (search == ('balance')) {
        let result = tenisProduct.filter((item) => {
          return item.nome.toLowerCase().includes(search)
        })
    
        res.render('search', {product: result })              
          
      } 
      else {

        let result = allProducts.filter((item) => {
          return item.nome.toLowerCase().includes(search)
        })
    
        res.render('search', {product: result })        
        
      }
       
  }

}

module.exports = homeController