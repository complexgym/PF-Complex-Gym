import { Router } from "express"
import deleteClient from "../controllers/clients/deleteClient"
import getAllClients from "../controllers/clients/getAllClients"
import getClientById from "../controllers/clients/getClientById"
import getClientByName from "../controllers/clients/getClientByName"
import postClient from "../controllers/clients/postClient"
import updateClientById from "../controllers/clients/updateClientById"

const router = Router()

/*
GET - all clients
GET - id clients - detail
GET - find by name

POST - client

DELETE - deactivate client for id

PUT - update client for id
*/

router.get('/', (req, res)=>{
    res.json({message: 'hola mundo 3'})
}) // all clients and find by name
router.get('/:id', (req, res)=>{})

router.post('/', (req, res)=>{})

router.delete('/:id', (req, res)=>{})

router.put('/:id', (req, res)=>{})

export default router