import API from './api'

interface PassengerRegisterInput {
  name: string
  nickname: string
  routeCode: string
  schoolName: string
  monitorID: string
}

export async function Register(data: PassengerRegisterInput): Promise<void> {
  await API.post(`passenger`, data)
}
