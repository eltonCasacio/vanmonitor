import API from './api'

export interface LoginResponse {
  token: string
  user: {
    id: string
    name: string
  }
}

export async function Login(): Promise<LoginResponse> {
  try {
    // const { data } = await API.get<LoginResponse>(`monitor/login`)
    return {
      user: {
        id: "123",
        name: 'John',
      },
      token: "12342f234fs342efd"
    }
  } catch (error) {
    throw new Error("Authentication Error: " + error)
  }
}
