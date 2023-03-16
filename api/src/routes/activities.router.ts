import { Router } from "express"
import getActivitiesById from '../controllers/activities/getActivitiesById'
import getActivitiesByName from "../controllers/activities/getActivitiesByName"
import getAllActivities from "../controllers/activities/getAllActivities"

const router = Router()


router.get("/", getAllActivities);
  
router.get("/name", getActivitiesByName);

router.get("/:id", getActivitiesById);

export default router