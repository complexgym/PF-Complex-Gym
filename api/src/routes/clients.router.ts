import { Router } from "express"
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
    res.json({message: 'hola mundo'})
}) // all clients and find by name
router.get('/:id', (req, res)=>{})

router.post('/', (req, res)=>{})

router.delete('/:id', (req, res)=>{})

router.put('/:id', (req, res)=>{})

export default router