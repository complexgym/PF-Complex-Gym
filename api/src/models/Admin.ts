import { DataTypes } from "sequelize";

module.exports = (sequelize) => {
    sequelize.define('admin', {
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
        }
    }, {timestamps: false})
}