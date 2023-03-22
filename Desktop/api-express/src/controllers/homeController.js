const productsHome = require('../database/productHome')
const productNovidades = require('../database/productNovidades.json')


const homeController = {
home: (req, res) => {
    res.render('home' , {productsHome ,productNovidades } )
}

}

module.exports = homeController