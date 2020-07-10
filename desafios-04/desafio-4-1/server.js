// Importação de funções
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methods = require('method-override')

// Adiciona a função importada a variavel
const server = express()

//Middlewares (Funções que antecedem as requisições(req), e respostas(res), das rotas)
server.use(express.urlencoded({extended: true }))
server.use(express.static('public')) //inportação de arquivos estaticos
server.use(methods('_method'))
server.use(routes) //Utilização da função que foi importada

//Configuração template engine
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server, // Seleciona o servidor
    autoescape: false, //Habilita Htmls dentro de variaveis
    noCache: true //Não armazena os sites em cache
})

//Abertura de porta
server.listen(5000, function(){
    console.log('Server is Runnin!')
})