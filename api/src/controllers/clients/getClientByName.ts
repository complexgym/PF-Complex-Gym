import {models} from '../../db'
const {client} = models

const getClientByName = async (name:string)=>{
    try {
        const response = await client.findAll({
            where:{
                name: name
            }
        })

        if (response.length === 0) throw Error('name not found')
        return response
    } catch (error: any) {
        return {error: error.message}
    }
}

export default getClientByName