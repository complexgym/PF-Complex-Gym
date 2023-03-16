"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const admin = (sequelize) => {
    sequelize.define('admin', {
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
        avatar: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        permits: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: false,
        }
    }, { timestamps: false });
};
exports.default = admin;
