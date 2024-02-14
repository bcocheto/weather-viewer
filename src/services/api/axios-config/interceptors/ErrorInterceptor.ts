import { AxiosError } from 'axios'

export const errorInterceptor = (error: AxiosError) => {
  if (error.response) {
    // Se a requisição foi feita e o servidor respondeu com um código de status fora do intervalo 2xx
    // Você pode adicionar tratamentos específicos para diferentes códigos de status aqui
    const status = error.response.status
    if (status >= 400 && status < 500) {
      // Erros do cliente (4xx)
      // Aqui você pode tratar erros específicos do cliente, como validação de entrada, autorização etc.
      // Você pode retornar uma estrutura de erro padronizada se desejar
      return Promise.reject(new Error('Erro do cliente: ' + error.message))
    } else if (status >= 500 && status < 600) {
      // Erros do servidor (5xx)
      // Aqui você pode lidar com erros internos do servidor
      // Você pode retornar uma estrutura de erro padronizada se desejar
      return Promise.reject(
        new Error('Erro interno do servidor. Por favor, tente novamente mais tarde.'),
      )
    }
  } else if (error.request) {
    // Se a requisição foi feita, mas não houve resposta do servidor
    return Promise.reject(
      new Error('Sem resposta do servidor. Por favor, verifique sua conexão e tente novamente.'),
    )
  } else {
    // Se algo aconteceu ao configurar a requisição que causou o erro
    return Promise.reject(new Error('Erro ao configurar a requisição. Por favor, tente novamente.'))
  }
}
