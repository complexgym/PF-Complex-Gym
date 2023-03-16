import { Router } from "express"

import { getClientByName, updateClientById } from "../controllers/index"

const router = Router()

/*
GET - all clients
GET - id clients - detail
GET - find by name

POST - client

DELETE - deactivate client for id

PUT - update client for id
*/

// TEST DATA
import { testData } from "../datatest/addClients.test"
import { clientInterface } from "../interfaces"

router.get('/', async (req, res) => {
    const { name } = req.query

    // FIND BY NAME CASE
    if (name && typeof name === 'string') {
        const response = await getClientByName(name)
        return res.json({
            message: 'find by name',
            response
        })
    }
    testData()
    res.json({
        message: 'find all clients'
    })
}) // all clients and find by name

router.get('/:id', (req, res) => { })

router.post('/', (req, res) => { })

router.delete('/:id', (req, res) => { })

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const data : clientInterface = req.body

    try {
        const response = await updateClientById(id, data)

        return res.json({
            message: 'ruta update funca1',
            response
        })
    } catch (error: any) {
        return res.json({
            message: 'algo salio mal',
            error: error.message
        })
    }
})

export default router