import { Request, Response } from 'express';
const { client, activities } = require("../../db")



const postClient = async (req:Request, res: Response) => {
    try {

        const {
            id,
            user,
            name,
            dni,
            avatar,
            height,
            weight,
            age,
            phone,
            mail,
            adress,
            activitie,
            routine
        } = req.body
        const active : boolean = true
        const debt : boolean = false
        const debtAmount: number = 0

        console.log("antes de create: ",
        id,
        user,
        name,
        dni,
        avatar,
        height,
        weight,
        age,
        phone,
        mail,
        adress,
        activitie,
        routine)

        const newClient = await client.create({
            id,
            user,
            name,
            dni,
            avatar,
            height,
            weight,
            age,
            phone,
            mail,
            adress,
            active,
            debt,
            debtAmount,
            routine
        })
        console.log("despues de create: ", newClient)

        /*const clientActivities = await activities.findAll({
            where: {
                name: activitie
            }
        })

        await newClient.addactivities(clientActivities)*/


        res.status(200).send(newClient)
    } catch (error) {
        if (typeof error === "string") {
            res.status(404).send(error)
        }
    }
}

module.exports = { 
    postClient 
}