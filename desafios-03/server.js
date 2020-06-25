//Importação das funções
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//Abertura de porta
server.listen(5000, function(){
    console.log('Server ok!')
})

//Configuração de Engine
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

//Importação de arquivos estaticos
server.use(express.static('public'))

//Rotas
server.get('/', function(req, res){
    return res.render('about')
})


server.get('/about', function(req, res){
    return res.render('about')
})

server.get('/courses', function(req, res){
    return res.render('courses')
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

