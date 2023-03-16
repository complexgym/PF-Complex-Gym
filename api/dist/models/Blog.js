"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const publication = (sequelize) => {
    sequelize.define('publication', {
        authorId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        tag: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            default: ["fitness"]
        }
    }, { timestamps: false });
};
exports.default = publication;
