"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/*
GET - all activities
GET - find by name
*/
router.get('/', (req, res) => { });
router.get('/:id', (req, res) => { });
router.get('/:name', (req, res) => { });
exports.default = router;
