const express = require('express')
const detalsController = require('../controllers/detalsController')
const router = express.Router()

const homeController = require('../controllers/homeController')

// aqui eu criei minha variavel loginController que recebe o objeto que eu to exportando da loginController.js
const loginController = require('../controllers/loginController')
// aqui eu criei minha variavel pagamentoController que recebe o objeto que eu to exportando da pagamentoController.js
const pagamentoController = require('../controllers/pagamentoController')
const roupasController = require('../controllers/roupasControler')


router.get('/',  homeController.home)

router.get('/detals/:id', detalsController.getProduct)
router.get('/search', homeController.search)


router.get('/carrinho', )
// aqui eu criei a rota /Login e quando ele acessa a rota ele chama a minha callback
router.get('/login', loginController.loginPage) 
// aqui eu criei a rota /Pagamento e quando ele acessa a rota ele chama a minha callback
router.get('/pagamento', pagamentoController.pagamentoPage)

//Rota para a página de de roupas
router.get('/roupas', roupasController.roupasPage)

router.post('/logar', loginController.logarUsuario)





module.exports = router