import dotenv  from 'dotenv';
import axios from "axios";

dotenv.config()

export interface weatherData {
    city?: string,
    type?: string,
    days?: number | string
}


export const getBasicWeatherInfo = async ({ city } : weatherData) => {

    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/current.json?key=${process.env.API_KEY}&q=${city}`);

        return response.data;
    } catch (error) {
        console.log(error);
    }

}

export const getWeather = async ({ city, type } : weatherData) => {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/${type}.json?key=${process.env.API_KEY}&q=${city}`);

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getDays = async ({city, days, type} : weatherData) => {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/${type}.json?key=${process.env.API_KEY}&q=${city}&days=${days}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}