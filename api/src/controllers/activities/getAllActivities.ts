import { Request, Response } from "express";
import { Model } from "sequelize/types";
import { db } from "../../db";

interface ActivitiesModel extends Model {
  name: string;
  description: string;
  days: string[];
  schedule: string[];
  trainerId: number;
  clientId: number;
}

const getAllActivities = async (req: Request, res: Response) => {
  try {
    const activities = await db.models.activities.findAll();
    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving activities" });
  }
};

export default getAllActivities;
