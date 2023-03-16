"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const clients = (sequelize) => {
    sequelize.define('client', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        user: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        dni: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        avatar: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        height: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        weight: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        age: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        mail: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        adress: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
        debt: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
        debtAmount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        routine: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, { timestamps: false });
};
exports.default = clients;
