import { DataTypes } from "sequelize";

const activities = (sequelize) => {
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
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        schedule: {
            type: DataTypes.ARRAY(DataTypes.STRING),
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

export default activities