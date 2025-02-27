//Função para inserir um novo jogo
 

const MESSAGE = require('../../modulo/config.js')

const jogoDAO = require('../../model/DAO/jogo.js')

//função para inserir um novo jogo
const inserirJogo = async function (jogo, contentType) {

    try{

        if(contentType == 'aplication/jason'){


    if( jogo.nome               == undefined   ||   jogo.nome               == ''   || jogo.nome                == null     ||  jogo.nome.length                > 80 ||
        jogo.data_lancamento    == undefined   ||   jogo.data_lancamento    == ''   || jogo.data_lancamento     == null     ||  jogo.data_lancamento.length     > 10 ||
        jogo.versao             == undefined   ||   jogo.versao             == ''   || jogo.versao              == null     ||  jogo.versao.length              > 10 ||
        jogo.tamanho            == undefined   ||   jogo.tamanho.length     > 10    || 
        jogo.descricao          == undefined   ||
        jogo.foto_capa          == undefined   ||   jogo.foto_capa.length   > 200   ||
        jogo.link               == undefined   ||   jogo.link.length        > 200   

      ){
        return MESSAGE.ERROR_REQUIRE_FIELDS //400
    }else{
        // encaminha os dados do novo banco para ser inserido no BD
        let resultjogo = await jogoDAO.insertJogo(jogo)

        if(resultjogo)
            return MESSAGE.SUCCESS_CREATED_ITEM //201
        else
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL //500
    }

}else{{
    return MESSAGE.ERROR_CONTENT_TYPE //415
}
       
        } 
    } catch (error) {
        return ERROR_INTERNAL_SERVER_CONTROLER
}

}

//Função para atualizar um jogo
const atualizarJogo = async function(){ 


}

//Função para excluir um jogo
const deletarJogo = async function(){ 

}

//Função para retornar um jogo
const listarJogo = async function(){ 

try{

let dadosjogos = {}


let resultjogo = await jogoDAO.selectAllJogo()

if(resultjogo != false){


if(resultjogo != false || typeof(resultjogo) == 'object'){
    
}

if(resultjogo.length > 0){

    //CRIA UM OBJETO DO TIPO JASON
    dadosjogos.status = true
    dadosjogos.status_code = 200
    dadosjogos.items = resultjogo.length
    dadosjogos.games = resultjogo

    return dadosjogos //200



}else{
    return MESSAGE.ERROR_NOT_FOUND //404
}

}else{
    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
}

} catch (error) {
   return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLER //500

}


}

//Função para buscar um jogo
const buscarJogo =  async function(){

}

module.exports = {
inserirJogo,
atualizarJogo,
deletarJogo,
listarJogo,
buscarJogo

}