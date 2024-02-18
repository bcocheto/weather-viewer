import { createContext, ReactNode, useState } from 'react'
import { OpenMeteoService } from '../services/api/openmeteo/OpenMeteoService'
import { OpenWeatherService } from '../services/api/openweather/OpenWeatherService'
import { ForecastData } from '../types/Forecast'
import { LocalPlace } from '../types/Place'
import { Weather } from '../types/Weather'

type WeatherProviderProps = {
  children: ReactNode
}

type WeatherContextProps = {
  currentWeather: Weather | null
  forecastData: ForecastData[] | null
  setCurrentWeather: React.Dispatch<React.SetStateAction<Weather | null>>
  fetchOpenWeatherCurrentWeather: (place: LocalPlace) => Promise<void>
  fetchOpenWeatherForecastData: (place: LocalPlace) => Promise<void>
  fetchOpenMeteoCurrentWeather: (place: LocalPlace) => Promise<void>
  fetchOpenMeteoForecastData: (place: LocalPlace) => Promise<void>
}

export const WeatherContext = createContext({} as WeatherContextProps)

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null)
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null)
  const openService = OpenWeatherService
  const meteoService = OpenMeteoService

  async function fetchOpenWeatherCurrentWeather(place: LocalPlace) {
    if (!place) return
    const response = await openService.weather(place?.lat, place?.lon)
    if (response) {
      setCurrentWeather(response)
    }
  }
  async function fetchOpenWeatherForecastData(place: LocalPlace) {
    if (!place) return
    const response = await openService.forecast(place?.lat, place?.lon)
    if (response) {
      setForecastData(response)
    }
  }

  async function fetchOpenMeteoCurrentWeather(place: LocalPlace) {
    if (!place) return
    const response = await meteoService.weather(place?.lat, place?.lon)
    if (response) {
      setCurrentWeather(response)
    }
  }
  async function fetchOpenMeteoForecastData(place: LocalPlace) {
    if (!place) return
    const response = await meteoService.forecast(place?.lat, place?.lon)
    if (response) {
      setForecastData(response)
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        forecastData,
        setCurrentWeather,
        fetchOpenWeatherCurrentWeather,
        fetchOpenWeatherForecastData,
        fetchOpenMeteoCurrentWeather,
        fetchOpenMeteoForecastData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
