/***********************************************
 * Objetivo: Arquivo de padronização de mensagens e status code para o projeto
 * Data: 20/02/2025
 * Autor: Victor Hugo
 * Versão: 1.0
 ***********************************************/ 

const ERROR_REQUIRE_FIELDS   =  {status: false, status_code : 400, message}
const ERROR_REQUIRE_SERVER   =  {status: false, status_code : 500, message}

const SUCCESS_CREATED_ITEM    =  {status: true, status_code: 201, message:  "item criado com sucesso" }

MediaSourceHandle.exports = {
ERROR_REQUIRE_FIELDS,
ERROR_CREATED_ITEM
}

