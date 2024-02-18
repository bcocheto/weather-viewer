import { ForecastData } from '../../../types/Forecast'
import { Weather } from '../../../types/Weather'
import {
  convertOpenMeteoWeatherToWeather,
  convertWeatherDataToForecast,
} from '../../../util/WeatherConversor'
import { Api } from '../axios-config'

const baseUrl = 'https://api.open-meteo.com/v1/forecast'

const weather = async (lat: number, lon: number): Promise<Weather> => {
  const response = await Api.get(
    `${baseUrl}/?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m&timezone=America%2FSao_Paulo`,
  )
  const weatherConverted: Weather = convertOpenMeteoWeatherToWeather(response)

  return weatherConverted
}
const forecast = async (lat: number, lon: number): Promise<ForecastData[]> => {
  const response = await Api.get(
    `${baseUrl}/?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo`,
  )
  const weatherConverted: ForecastData[] = convertWeatherDataToForecast(response)

  return weatherConverted
}

export const OpenMeteoService = { weather, forecast }
