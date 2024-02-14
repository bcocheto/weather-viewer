import { Place } from '../../../types/Place'
import { Api } from '../axios-config'

type Places = {
  data: Place[]
}

const get = async (adress: string): Promise<Places | Error> => {
  try {
    const response = await Api.get(
      `/geo/1.0/direct?q=${adress}&appid=${import.meta.env.VITE_API_KEY_OPEN_WEATHER}`,
    )
    console.log(response)

    if (response) {
      return response
    }
    return new Error('Erro ao listar os registros.')
  } catch (error) {
    console.error(error)
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.')
  }
}

export const GeoService = {
  get,
}
