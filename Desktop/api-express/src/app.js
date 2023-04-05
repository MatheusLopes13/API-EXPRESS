const routes = require('./routes/index')
const path = require("path")
const express = require('express')
const app = express();
const ejs = require('ejs');
app.use(express.json())
// aqui na linha 8 captura na forma de objeto literal tudo o que vem de um formulário
app.use(express.urlencoded({ extended: false }))

// instanciando como view engine
app.set("view engine", "ejs")
//instaciando Itens EJS - tela Skate.ejs
app.get('/', function(req, res) {
  res.render('index', { title: 'Skate - Jetskateshop', buttonLabel: 'Limpar', filterMedidas: 'MEDIDAS', Item1: 'Shapes', Item2: 'Trucks', Item3: 'Rodas', titleItem1: 'Boulevard', valueItem1: 'R$800,00', buttonLabel2: 'Comprar', valueItem2: 'Creature', valueItem3: 'DGK', valueItem4: 'Primitive', 
  valueItem5: 'Chocolate', valueItem6: 'Diamond', valueItem7: 'Girl', valueItem8: 'Independent', valueItem9: 'Venture', valueItem10: 'Bones',valueItem11: 'Ricta', valueItem12: 'Spit Fire', valueItem13: 'Element'});
});
// instanciando pasta views
app.set("views", path.resolve("src", "views"))
// liberando acesso a pasta public

app.use(express.static(path.resolve("public")))

/**
 * Rotas
 */
app.use(routes)

app.listen(3000, () => {
  console.log('Servidor Rodando!')
})