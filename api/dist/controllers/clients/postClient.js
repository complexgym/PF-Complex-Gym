"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { client, activities } = require("../../db");
const postClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, user, name, dni, avatar, height, weight, age, phone, mail, adress, activitie, routine } = req.body;
        const active = true;
        const debt = false;
        const debtAmount = 0;
        console.log("antes de create: ", id, user, name, dni, avatar, height, weight, age, phone, mail, adress, activitie, routine);
        const newClient = yield client.create({
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
        });
        console.log("despues de create: ", newClient);
        /*const clientActivities = await activities.findAll({
            where: {
                name: activitie
            }
        })

        await newClient.addactivities(clientActivities)*/
        res.status(200).send(newClient);
    }
    catch (error) {
        if (typeof error === "string") {
            res.status(404).send(error);
        }
    }
});
module.exports = {
    postClient
};
