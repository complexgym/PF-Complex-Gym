import { DataTypes } from "sequelize";

module.exports = (sequelize) => {
    sequelize.define('activities', {   

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        days: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        schedule: {
            type: DataTypes.ARRAY,
            allowNull: false,
        },
        trainerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

     }, {timestamps: false})
}