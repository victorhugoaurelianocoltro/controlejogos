/**************************************************************
 * Objetivo: Arquivo responsável pela manipulação de dados da
 * tabela tbl_conversas (controller)
 * Data: 17/04/2025
 * Autor: Vitinho da Caixa d'água
 **************************************************************/

const MESSAGE = require('../../modulo/config.js')
const conversasDAO = require('../../model/DAO/conversas.js')

const inserirConversa = async function (conversa, contentType) {
    try {
        if (contentType == 'application/json') {
            if (
                conversa.nome_remetente == undefined || conversa.nome_remetente == '' || conversa.nome_remetente == null || conversa.nome_remetente.length > 100 ||
                conversa.nome_destinatario == undefined || conversa.nome_destinatario == '' || conversa.nome_destinatario == null || conversa.nome_destinatario.length > 100 ||
                conversa.mensagem == undefined || conversa.mensagem == ''
            ) {
                return MESSAGE.ERROR_REQUIRE_FIELDS // 400
            } else {
                let result = await conversasDAO.insertConversa(conversa)
                if (result)
                    return MESSAGE.SUCCESS_CREATED_ITEM // 201
                else
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL // 500
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE // 415
        }
    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLER
    }
}

const atualizarConversa = async function (conversa, id, contentType) {
    try {
        if (contentType == 'application/json') {
            if (
                conversa.nome_remetente == undefined || conversa.nome_remetente == '' || conversa.nome_remetente == null || conversa.nome_remetente.length > 100 ||
                conversa.nome_destinatario == undefined || conversa.nome_destinatario == '' || conversa.nome_destinatario == null || conversa.nome_destinatario.length > 100 ||
                conversa.mensagem == undefined || conversa.mensagem == ''
            ) {
                return MESSAGE.ERROR_REQUIRE_FIELDS
            } else {
                let resultBusca = await buscarConversa(id)
                if (resultBusca.status_code == 200) {
                    conversa.id = parseInt(id)
                    let result = await conversasDAO.updateConversa(conversa)
                    if (result)
                        return MESSAGE.SUCCESS_UPDATED_ITEM
                    else
                        return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            }
        } else {
            return MESSAGE.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLER
    }
}

const deletarConversaPorID = async function (id) {
    try {
        if (id == '' || id == undefined || id == null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRE_FIELDS
        } else {
            let resultBusca = await buscarConversa(id)
            if (resultBusca.status_code == 200) {
                let result = await conversasDAO.deleteConversa(id)
                if (result)
                    return MESSAGE.SUCCESS_DELETED_ITEM
                else
                    return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        }
    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLER
    }
}

const listarConversas = async function () {
    try {
        let dados = {}
        let result = await conversasDAO.selectAllConversas()
        if (result) {
            if (result.length > 0) {
                dados.status = true
                dados.status_code = 200
                dados.quantidade = result.length
                dados.conversas = result
                return dados
            } else {
                return MESSAGE.ERROR_NOT_FOUND
            }
        } else {
            return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLER
    }
}

const buscarConversa = async function (id) {
    try {
        if (id == '' || id == undefined || id == null || isNaN(id) || id <= 0) {
            return MESSAGE.ERROR_REQUIRE_FIELDS
        } else {
            let dados = {}
            let result = await conversasDAO.selectByIDConversa(id)
            if (result) {
                if (result.length > 0) {
                    dados.status = true
                    dados.status_code = 200
                    dados.conversas = result
                    return dados
                } else {
                    return MESSAGE.ERROR_NOT_FOUND
                }
            } else {
                return MESSAGE.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        return MESSAGE.ERROR_INTERNAL_SERVER_CONTROLER
    }
}

module.exports = {
    inserirConversa,
    atualizarConversa,
    deletarConversaPorID,
    listarConversas,
    buscarConversa
}
