import { Model } from 'sequelize'
import {models} from '../../db'
const {client} = models

import { clientInterface } from '../../interfaces'

const updateClientById = async(id: string, newData : clientInterface)=>{
    try {
        const responseUpdate = await client.update(newData, {
            where: {
                id: id
            }
        })

        if (responseUpdate[0] === 0) throw Error('id not found')

        const responseResult = await client.findByPk(id)
        
        return responseResult
    } catch (error: any) {
        return {error: error.message}
    }
}

export default updateClientById