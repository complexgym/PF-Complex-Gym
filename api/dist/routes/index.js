"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const clients_router_1 = __importDefault(require("./clients.router"));
const activities_router_1 = __importDefault(require("./activities.router"));
router.use('/clients', clients_router_1.default);
router.use('/activities', activities_router_1.default);
exports.default = router;
