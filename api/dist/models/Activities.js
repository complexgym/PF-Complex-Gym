"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const activities = (sequelize) => {
    sequelize.define('activities', {
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        days: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: false,
        },
        schedule: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: false,
        },
        trainerId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        clientId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        }
    }, { timestamps: false });
};
exports.default = activities;
