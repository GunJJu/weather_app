import axios from "axios"
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY


export const fetchWheaterByCoords = async (lat, lon) => {
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat,
            lon,
            units: 'metric',
            lang: 'kr',
            appid: API_KEY
        }
    })
    return res.data
}