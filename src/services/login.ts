import API from './api'

export interface LoginResponse {
  token: string
  user: {
    id: string
    name: string
  }
}

export async function Login(cpf: string): Promise<LoginResponse> {
    const response = await API.get<LoginResponse>(`monitor/authenticate/${cpf}`)
    return  response.data
}
