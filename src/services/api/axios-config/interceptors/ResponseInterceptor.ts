import { AxiosResponse } from 'axios'

export const responseInterceptor = (response: AxiosResponse) => {
  // Aqui você pode adicionar tratamentos adicionais, se necessário,
  // como validação de dados, conversão de formatos, etc.
  return response.data // Retorna apenas os dados da resposta
}
