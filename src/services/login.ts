import API from './api'

export interface LoginResponse {
  token: string
  user: {
    ID: string
    Name: string
  }
}

export async function Login(cpf: string): Promise<LoginResponse> {
    const {data} = await API.get<LoginResponse>(`monitor/authenticate/${cpf}`)
    return data
}
