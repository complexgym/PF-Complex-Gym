import { Request, Response } from 'express';
const { client } = require("../../db")


const deleteClient = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params
        console.log("adentro de delete: ", id)
        await client.destroy({
            where: {
                id: id
            }
        })
        res.status(200).send("Delete Succesfull")
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    deleteClient
} 