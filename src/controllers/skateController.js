const skateProduct = require('../database/productSkate.json')
const carrinhoProdutos = require('../database/carrinhoProdutos.json')

const skateController = {
    skatePage: (req, res) => {
        res.render('skate', {skateProduct: skateProduct, carrinhoProdutos: carrinhoProdutos })
    }
}
module.exports = skateController