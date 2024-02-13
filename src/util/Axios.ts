import axios from 'axios'

interface AxiosError {
  response?: {
    data?: {
      message: string
    }
  }
}

const axiosGear = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get: async (url: string): Promise<any> => {
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      const errorMessage = axiosError.response?.data?.message ?? 'Erro desconhecido'
      throw new Error(errorMessage)
    }
  },

  // Implementação similar para os métodos POST, PUT e DELETE
}

export default axiosGear
