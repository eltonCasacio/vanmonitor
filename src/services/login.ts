import API from './api'

export interface LoginResponse {
  token: string
  user: {
    id: string
    name: string
  }
}

export async function Login(cpf: string): Promise<LoginResponse> {
  try {
    console.log("Login::",cpf);
    const { data } = await API.get<LoginResponse>(`monitor/authenticate/${cpf}`)
    return  data
  } catch (error) {
    throw new Error("Authentication Error: " + error)
  }
}
