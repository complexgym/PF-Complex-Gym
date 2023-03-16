"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const trainer = (sequelize) => {
    sequelize.define('trainer', {
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
        },
        classes: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.TEXT,
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
    }, { timestamps: false });
};
exports.default = trainer;
