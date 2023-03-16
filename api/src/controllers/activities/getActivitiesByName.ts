import { Request, Response } from 'express';
import { models } from "../../db";

const getActivitiesByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const activities = await models.activities.findAll({
      where: {
        name,
      },
    });

    activities.length ? 
      res.status(200).json(activities) :
      res.status(404).send('Activity not found');

  } catch (error) {

    console.error(error);
    res.status(500).json({message: "Internal server error",});
  }
};

export default getActivitiesByName;