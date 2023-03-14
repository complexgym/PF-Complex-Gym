import { DataTypes } from "sequelize";

module.exports = (sequelize) => {
    sequelize.define('client', {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        dni:  { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
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
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        debt: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },


    }, {timestamps: false})
}