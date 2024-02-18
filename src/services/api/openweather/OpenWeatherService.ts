import { ForecastData } from '../../../types/Forecast'
import { Weather } from '../../../types/Weather'
import {
  convertOpenWeatherToForecast,
  convertOpenWeatherToWeather,
} from '../../../util/WeatherConversor'
import { Api } from '../axios-config'

const baseUrl = 'http://api.openweathermap.org/data/2.5'

const weather = async (lat: number, lon: number): Promise<Weather> => {
  const response = await Api.get(
    `${baseUrl}/weather?lat=${lat}&lon=${lon}&lang=pt-br&units=metric&appid=${import.meta.env.VITE_API_KEY_OPEN_WEATHER}`,
  )
  const weatherConverted: Weather = convertOpenWeatherToWeather(response)
  return weatherConverted
}

const forecast = async (lat: number, lon: number): Promise<ForecastData[]> => {
  const response = await Api.get(
    `${baseUrl}/forecast?lat=${lat}&lon=${lon}&lang=pt-br&units=metric&appid=${import.meta.env.VITE_API_KEY_OPEN_WEATHER}`,
  )
  const forecastConverted: ForecastData[] = convertOpenWeatherToForecast(response)
  return forecastConverted
}
export const OpenWeatherService = {
  weather,
  forecast,
}
