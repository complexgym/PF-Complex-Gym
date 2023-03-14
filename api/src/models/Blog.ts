import { DataTypes } from "sequelize";

module.exports = (sequelize) => {
    sequelize.define('blog', {   
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
     })
};