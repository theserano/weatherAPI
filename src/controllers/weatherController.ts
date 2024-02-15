import express, {Response, Request} from "express";
import { getBasicWeatherInfo, getWeather, weatherData, getDays } from "../services/weatherService";


export const getBasicWeatherControl = async (req: Request, res: Response) => {
    try {
        const {city} = req.body;

        if(!city){
            return res.status(400).json({message: "City can't be found"})
        }
        const basicWeatherInfo = await getBasicWeatherInfo(city);

        if (!basicWeatherInfo) {
            return res.status(404).json({ message: "Data not found" });
        }
        return res.status(200).json(basicWeatherInfo);

    } catch (error) {
        return res.status(404).json({message: error})
    }
}


export const getWeatherWithType = async (req: Request, res: Response) => {
    try {
        const {city, type} = req.body;

        if(!city || !type){
            return res.json(400).json({message: "Credentials not found"})
        }

        const data: weatherData = {
            city: city,
            type: type
        }

        const weatherDetails = await getWeather(data);

        return res.status(200).json(weatherDetails)

    } catch (error) {
        return res.status(404).json({message: error})
    }
}

export const getWeatherWithDays = async (req: Request, res: Response) => {
    try {
        const {city, type, days} = req.body;
        
        if(!city || !type || !days){
            return res.status(400).json({message: "Invalid credentials"});
        }
        
        const data: weatherData = {
            city: city,
            type: type,
            days: days
        }

        const weatherDetails = await getDays(data);

        return res.status(200).json(weatherDetails);
    } catch (error) {
        return res.status(200).json({message: error})
    }
}