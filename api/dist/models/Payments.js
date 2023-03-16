"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payments = (sequelize) => {
    sequelize.define('payments', {}, { timestamps: false });
};
exports.default = payments;
