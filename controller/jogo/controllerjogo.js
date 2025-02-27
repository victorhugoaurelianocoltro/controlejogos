//Função para inserir um novo jogo
const inserirJogo = async function(jogo){ 

const MESSAGE = requeri('../../modulo/config.js')

const jogoDAO = require('../../modul/DAO/jogo.js')

//função para inserir um novo jogo
const inserirJogo = async function () {

}

    if(
        jogo.nome               == undefined   ||   jogo.nome               == ''   || jogo.nome                == null     ||  jogo.nome.length                > 80 ||
        jogo.data_lancamento    == undefined   ||   jogo.data_lancamento    == ''   || jogo.data_lancamento     == null     ||  jogo.data_lancamento.length     > 10 ||
        jogo.versao             == undefined   ||   jogo.versao             == ''   || jogo.versao              == null     ||  jogo.versao.length              > 10 ||
        jogo.tamanho            == undefined   ||   jogo.tamanho.length     > 10    || 
        jogo.descricao          == undefined   ||
        jogo.foto_capa          == undefined   ||   jogo.foto_capa.length   > 200   ||
        jogo.link               == undefined   ||   jogo.link.length        > 200   

      ){
        return MESSAGE.ERROR_REQUIRE_FILDS //400
    }else{
        // encaminha os dados do novo banco para ser inserido no BD
        let resultjogo = await jogoDAO.inserirJogo(jogo)

        if(resultjogo)
            return MESSAGE.SUCCES_CREATED_ITEM //201
        else
        return MESSAGE.ERROR_INTERNAL_SERVER //500
        
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