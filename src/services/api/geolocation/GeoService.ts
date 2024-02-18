// Importe o tipo AxiosResponse do axios
import { Place } from '../../../types/Place'
import { Api } from '../axios-config'

// Interface para representar a estrutura dos dados retornados pela API de geocodificação

const get = async (address: string): Promise<Place[] | Error> => {
  try {
    // Tipar a resposta da requisição como AxiosResponse<GeocodingResponse>
    const { results }: { results: Place[] } = await Api.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${address}&count=3&language=pt-br&format=json`,
    )
    // Verificar se a resposta foi bem-sucedida e se possui dados
    if (results.length > 0) {
      return results
    }
    return new Error('Cidade não encontrada.')
  } catch (error) {
    console.error(error)
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.')
  }
}

export const GeoService = {
  get,
}
