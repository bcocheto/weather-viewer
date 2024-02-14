import axiosGear from '../../../util/Axios'

type WeatherParamsType = {
  lat: number
  lon: number
}

const openWeather = {
  current: async (params: WeatherParamsType) => {
    try {
      const response = await axiosGear.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=${process.env.API_KEY_OPEN_WEATHER}&units=metric`,
      )
      return response.data
    } catch (error) {
      console.log('Erro ao buscar clima', error)
    }
  },
  forecasat: async (params: WeatherParamsType) => {
    try {
      const response = await axiosGear.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}&appid=${process.env.API_KEY_OPEN_WEATHER}&units=metric`,
      )
      return response.data
    } catch (error) {
      console.log('Erro ao buscar clima da semana', error)
    }
  },
}

export default openWeather
