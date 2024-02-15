import express from "express"
import { getBasicWeatherControl, getWeatherWithDays, getWeatherWithType } from "../controllers/weatherController"

const router = express.Router()

router.get("/basic", getBasicWeatherControl)
    .get("/type", getWeatherWithType)
    .get("/days", getWeatherWithDays);

export default router;