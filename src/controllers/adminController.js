
const { validationResult } = require('express-validator');
// aqui eu criei meu objeto Pagamento que tem um atributo e esse atributo é uma função
/* const productNovidades = require('../database/productNovidades.json'); */
const carrinhoProdutos = require('../database/carrinhoProdutos.json')
const {Product} = require('../models')

// importação do nosso dataBase 
const adminController = {
// aqui é o meu atributo função 
    renderizarAdminPage: async (req, res) => {

        const produto = await Product.findAll()

            res.render('admin', { produto: produto , carrinhoProdutos: carrinhoProdutos })

    }, 

    addProduct: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors)
            console.log(errors.mapped())
            res.render('admin',{ errors: errors.array(), carrinhoProdutos })
        }
        else {         
                const product = req.body
                const getProduct = await Product.findOne({where: {codigo_produto: product.codigo_produto}
                })
                
                    if(getProduct){

                        res.send('PRODUTO  JÁ CADASTRADO')
                    }

                      
                    else{

                        await Product.create(product)

                        const newProducts = await Product.findAll()

                        res.render("admin", { produto: newProducts ,carrinhoProdutos: carrinhoProdutos } )


                    }
                    
                   
               
             }
            
        },

        deleteProduct: async (req, res) => {
            const { id } = req.params

            const getProduct = await Product.findOne({ where: { id: id } })

            if (getProduct !== null){
                const result = await Product.destroy({ where: { id } })

                const newProducts = await Product.findAll()

                res.render("admin", { produto: newProducts ,carrinhoProdutos: carrinhoProdutos } )
            }

            else { res.send("Produto não encontrado")

            }

           
            
        }

      


    }

// aqui eu to exportando o meu objeto
module.exports = adminController