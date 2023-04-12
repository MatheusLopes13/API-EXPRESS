const express = require('express')
const detalsController = require('../controllers/detalsController')
const router = express.Router()

const homeController = require('../controllers/homeController')

// aqui eu criei minha variavel loginController que recebe o objeto que eu to exportando da loginController.js
const loginController = require('../controllers/loginController')
// aqui eu criei minha variavel pagamentoController que recebe o objeto que eu to exportando da pagamentoController.js
const pagamentoController = require('../controllers/pagamentoController')


router.get('/', homeController.home)
// aqui eu criei a rota /Login e quando ele acessa a rota ele chama a minha callback
router.get('/login', loginController.loginPage) 
// aqui eu criei a rota /Pagamento e quando ele acessa a rota ele chama a minha callback
router.get('/pagamento', pagamentoController.pagamentoPage)

router.post('/logar', loginController.logarUsuario)
router.post('/criarconta', loginController.cadastrarUsuario)

router.get('/detals/:id', detalsController.getProduct)



module.exports = router