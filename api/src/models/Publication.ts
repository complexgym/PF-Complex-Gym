import { DataTypes } from "sequelize";

const publication = (sequelize) => {
    sequelize.define('publication', {   
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

export default publication