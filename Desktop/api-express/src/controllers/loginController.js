// eu criei meu objeto Login que tem um atributo e esse atributo é uma função
const loginMock = require("../database/login.json")
const { validationResult } = require('express-validator');

const loginController = {
// aqui é o meu atributo função    
    renderizarTelaLogin: (req, res) => {
        res.render('login')
    },
    
    cadastrarUsuario: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped())
            res.render('login', { errors: errors.array() })
        } else {
            res.redirect('/')
        }
        

    },

    //req é a requisição, res é a resposta
    logarUsuario: (req, res) => { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped())
            res.render('login', { errors: errors.array() })
        } else {

            //aqui estou criando uma variavel que pega as infos que o usuario mandou
            const email = req.body.email
            const senha = req.body.senha
            // aqui estou tentando encontrar alguem que tenha o mesmo email e senha digitados na pg de login
            const encontrandoUsuario = loginMock.find((user) => {
                if(user.email === email && user.senha === senha) {
                    return user
                }
            }) 
            // se caso o usuario nao for cadastrado 
            if(encontrandoUsuario === undefined) {
                res.send("Usuario não encontrado")
            } else {
                res.redirect('/')
            }
        }

        
    },

     
}       

// aqui eu to exportando o meu objeto
module.exports= loginController
