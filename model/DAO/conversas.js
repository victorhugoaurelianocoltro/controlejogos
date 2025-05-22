/**************************************************************
 * Objetivo: Arquivo responsável pela manipulação de dados da
 * tabela tbl_conversas no banco de dados (DAO)
 * Data: 17/04/2025
 * Autor: Vitinho da Caixa d'água
 **************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Inserir nova conversa
const insertConversa = async function (dados) {
    try {
        let sql = `
            INSERT INTO tbl_conversas (mensagem)
            VALUES ('${dados.mensagem}')
        `
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        return false
    }
}

// Atualizar conversa existente
const updateConversa = async function (dados) {
    try {
        let sql = `
            UPDATE tbl_conversas SET 
                mensagem = '${dados.mensagem}'
            WHERE id = ${dados.id}
        `
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        return false
    }
}

// Deletar conversa por ID
const deleteConversa = async function (id) {
    try {
        let sql = `DELETE FROM tbl_conversas WHERE id = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)
        return result ? true : false
    } catch (error) {
        return false
    }
}

// Listar todas as conversas
const selectAllConversas = async function () {
    try {
        let sql = `SELECT * FROM tbl_conversas ORDER BY id DESC`
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        return false
    }
}

// Buscar conversa por ID
const selectByIDConversa = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_conversas WHERE id = ${id}`
        let result = await prisma.$queryRawUnsafe(sql)
        return result
    } catch (error) {
        return false
    }
}

module.exports = {
    insertConversa,
    updateConversa,
    deleteConversa,
    selectAllConversas,
    selectByIDConversa
}
