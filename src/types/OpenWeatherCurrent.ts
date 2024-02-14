interface Coord {
  lat: number
  lon: number
}

interface Timezone {
  timezone: string
  timezone_offset: number
}

interface FeelsLike {
  temp: number
  feels_like: number
}

interface Wind {
  speed: number
  deg: number
  gust?: number
}

interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Precipitation {
  dt: number
  precipitation: number
}

interface HourlyWeather {
  dt: number
  temp: number
  feels_like: FeelsLike
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind: Wind
  weather: Weather[]
  pop: number
}

interface DailyTemp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

interface DailyFeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

interface DailyWeather {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  summary: string
  temp: DailyTemp
  feels_like: DailyFeelsLike
  pressure: number
  humidity: number
  dew_point: number
  wind: Wind
  weather: Weather[]
  clouds: number
  pop: number
  rain?: number
  uvi: number
}

interface Alert {
  sender_name: string
  event: string
  start: number
  end: number
  description: string
  tags: string[]
}

interface OpenWeatherResponse {
  coord: Coord
  timezone: Timezone
  current: {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: FeelsLike
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind: Wind
    weather: Weather[]
  }
  minutely: Precipitation[]
  hourly: HourlyWeather[]
  daily: DailyWeather[]
  alerts: Alert[]
}

export type { OpenWeatherResponse }
