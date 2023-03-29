
const allProducts = require('../database/allProduct.json')


const homeController = {
home: (req, res) => {
    res.render('home' , {allProducts } )
}, 


}

module.exports = homeController