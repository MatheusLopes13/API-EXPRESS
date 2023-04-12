const allProducts = require('../database/allProduct.json')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')

const roupasController = {
    roupasPage: (req, res) => {
        res.render('roupas', {allProducts: allProducts, carrinhoProdutos: carrinhoProdutos })
    }
}
module.exports = roupasController
