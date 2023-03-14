import { DataTypes } from "sequelize";

module.exports = (sequelize) => {
    sequelize.define('blog', {   
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
     }, {timestamps: false})
}