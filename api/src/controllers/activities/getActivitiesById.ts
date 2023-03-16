import { json } from "body-parser";
import { Request, Response } from "express";
import { models } from "../../db";


const getActivitiesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id)
    const activity = await models.activities.findAll({
        where: {id}
    });

    activity.length ? 
      res.status(200).json(activity) :
      res.status(404).send('Activity not found');
  } catch (error) {
    console.error(error);
    res.status(500).send( "Internal server error" );
  }
};

export default getActivitiesById;