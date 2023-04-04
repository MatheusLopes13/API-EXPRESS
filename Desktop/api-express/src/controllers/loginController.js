// eu criei meu objeto Login que tem um atributo e esse atributo é uma função
const loginMock = require("../database/login.json")
const loginController = {
// aqui é o meu atributo função    
    loginPage: (req, res) => {
        res.render('login')
    },
    
    cadastrarUsuario: (req, res) => {
        const novoUsuario = req.body
        res.send(req.body)
    },


    logarUsuario: (req, res) => { 
        //req é a requisição, res é a resposta
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
        } 
        res.send(encontrandoUsuario)

        
},

     
}       

// aqui eu to exportando o meu objeto
module.exports= loginController
