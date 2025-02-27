//Import da biblioteca do prisma client para executar scripts no BD
const { PrismaClient } = require('@prisma/client')

//Funcão para inserir no banco de dados um novo jogo
const insertJogo = async function(jogo){
    //Instancia da Classe do prisma client, para gerar um objeto
    const prisma =  new PrismaClient()

    let sql  = `insert into tbl_jogo(   
                                        nome,
                                        data_lancamento,
                                        versao,
                                        tamanho,
                                        descricao,
                                        foto_capa,
                                        link
                                    ) values (
                                        '${jogo.nome}',
                                        '${jogo.data_lancamento}',
                                        '${jogo.versao}',
                                        '${jogo.tamanho}',
                                        '${jogo.descricao}',
                                        '${jogo.foto_capa}',
                                        '${jogo.link}'
                                    );`

    //Executa o Script SQL no BD e AGUARDA (AWAIT) o retorbo do BD
    let result = await prisma.$executeRawUnsafe(sql)

    if(result)
        return true
    else
        return false
    
}

//Funcão para atualizar no Banco de Dados um jogo existente
const updateJogo = async function(){
    
}

//Funcão para excluir no Banco de Dados de um jogo existente
const deleteJogo = async function(){
    
}

//Funcão para retornar do Banco de Dados uma lista de jogos
const selectAllJogo = async function(){
    
}

//Funcão para buscar no banco de dados um jogo pelo ID
const selectByIDJogo = async function(){
    
}

module.exports = {
    insertJogo,
    updateJogo,
    deleteJogo,
    selectAllJogo,
    selectByIDJogo
}