/**************************************************
 * Objetivo: 
 * Data: 20/02/2025
 * Autor: Victor Hugo
 * Versão: 1.0
 * Observação:
 * *******Para confifgurar e instalar a API, precisamos das seguintes Bibliotecas
 *                            express            npm install express --save
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * para realizar o sincronismo do prisma com o BD, devemos executar o seguinte comando: 
 * npx prisma migrate dev
 *************************************************/


// Import das bibliotecas 
const express      = require('express')
const cors         =  require('cors')
const bodyParser   = require('body-parser')

const controllerJogo = require('./controller/jogo/controllerjogo.js')

// Estabelecendo o formato de dados que devera chegar no body da requisição (POST ou PUT)
const bodyParserJSON = bodyParser.json()

//cria o objeto app criar a API
const app = express()

app.use((request, response, next)   =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS')


    app.use(cors())
    next()

})



//EndPoint para inserir um jogo no BD
app.post('/v1/controle-jogos/jogos', cors(), bodyParserJSON, async function(request, response){

    //recebe o content type 
let contentType = request.headers['content-type']

console.log(Request.headers)
    //recebe o conteudo do body da requisição
    let dadosbody = request.body

    //Encaminhando  os dados do body da requisição para a controller inserir  no BD
    let resultJogo = await controllerJogo.inserirJogo(dadosbody, contentType)


    response.status(resultJogo.status_code)
    response.json(resultJogo)
})

app.get('/v1/controle-jogos/jogo',  cors(), bodyParserJSON, async function (request, response) {
    let resultJogo = await controllerJogo.listarJogo()

    response.status(resultJogo.status_code)
    response.json(resultJogo)
})

app.listen(8080, function(){
    console.log('API aguardando requisições . . .')
})  