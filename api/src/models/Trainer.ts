import { DataTypes } from "sequelize";

module.exports = (sequelize) => {
    sequelize.define('trainer', {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        permits: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        classes:  {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {timestamps: false})
}