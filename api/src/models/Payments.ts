import { DataTypes } from "sequelize";

const payments = (sequelize) => {
    sequelize.define('payments', {   
        
     }, {timestamps: false})
}

export default payments