"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { deleteClient, postClient } = require("../controllers/index");
const router = (0, express_1.Router)();
/*
GET - all clients
GET - id clients - detail
GET - find by name

POST - client

DELETE - deactivate client for id

PUT - update client for id
*/
//router.get('/', (req, res)=>{})
//router.get('/:id', (req, res)=>{})
router.post('/', postClient);
router.delete('/:id', deleteClient);
//router.put('/:id', (req, res)=>{})
exports.default = router;
