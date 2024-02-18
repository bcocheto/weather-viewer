import { ForecastData } from '../types/Forecast'
import { Weather } from '../types/Weather'
import { translateWeather } from './WeatherTranslation'

// Converte os dados do OpenWeatherMap para o formato Weather
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertOpenWeatherToWeather(responseData: any): Weather {
  return {
    main: {
      feels_like: responseData.main.feels_like,
      humidity: responseData.main.humidity,
      pressure: responseData.main.pressure,
      temp: responseData.main.temp,
      temp_max: responseData.main.temp_max,
      temp_min: responseData.main.temp_min,
    },
    name: responseData.name,
    sys: {
      country: responseData.sys.country,
      sunrise: responseData.sys.sunrise,
      sunset: responseData.sys.sunset,
    },
    weather: {
      id: responseData.weather[0].id,
      main: translateWeather(responseData.weather[0].main),
      description: responseData.weather[0].description,
    },
    wind: {
      deg: responseData.wind.deg,
      speed: responseData.wind.speed,
    },
  }
}

// Converte os dados do OpenWeatherMap para o formato Forecast
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertOpenWeatherToForecast(responseData: any): ForecastData[] {
  const forecastData: ForecastData[] = []
  for (let i = 0; i < responseData.list.length; i += 8) {
    forecastData.push({
      day: responseData.list[i].dt_txt,
      temp: {
        temp_max: responseData.list[i].main.temp_max,
        temp_min: responseData.list[i].main.temp_min,
      },
      weather: {
        id: responseData.list[i].weather[0].id,
        main: translateWeather(responseData.list[i].weather[0].main),
      },
    })
  }
  return forecastData
}

// Converte os dados do OpenMeteo para o formato Weather
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertOpenMeteoWeatherToWeather(responseData: any): Weather {
  return {
    weather: {
      id: responseData.current.weather_code,
      main: convertWeatherCodeToMain(responseData.current.weather_code),
      description: '',
    },
    main: {
      temp: responseData.current.temperature_2m,
      feels_like: responseData.current.apparent_temperature,
      temp_min: 0,
      temp_max: 0,
      pressure: responseData.current.surface_pressure,
      humidity: responseData.current.relative_humidity_2m,
    },
    wind: {
      speed: responseData.current.wind_speed_10m,
      deg: 0,
    },
    sys: {
      country: '',
      sunrise: 0,
      sunset: 0,
    },
    name: '',
  }
}

// Converte os dados do OpenMeteo para o formato Forecast
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertWeatherDataToForecast(data: any): ForecastData[] {
  const forecastData: ForecastData[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data.daily.time.forEach((day: any, index: string | number) => {
    forecastData.push({
      day,
      temp: {
        temp_min: data.daily.temperature_2m_min[index],
        temp_max: data.daily.temperature_2m_max[index],
      },
      weather: {
        id: data.daily.weather_code[index],
        main: convertWeatherCodeToMain(data.daily.weather_code[index]),
      },
    })
  })

  return forecastData
}

function convertWeatherCodeToMain(code: number): string {
  switch (code) {
    case 0:
      return 'Céu limpo'
    case 1:
    case 2:
    case 3:
      return 'Parcialmente nublado'
    case 45:
    case 48:
      return 'Nublado'
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return 'Nuvens dispersas'
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return 'Chuva'

    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return 'Neve'
    case 95:
    case 96:
    case 99:
      return 'Tempestade'
    default:
      return 'Céu limpo'
  }
}
