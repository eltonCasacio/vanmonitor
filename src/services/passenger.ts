import API from './api'

interface PassengerRegisterInput {
  name: string
  nickname: string
  routeCode: string
  schoolName: string
  monitorID: string
}

interface PassengerEditInput {
  id: string
  name: string
  nickname: string
  routeCode: string
  schoolName: string
  goes: boolean
  comesback: boolean
  registerConfirmed: boolean
  monitorID: string
}

export const Register = async (data: PassengerRegisterInput): Promise<void> => {
  await API.post(`passenger`, data)
}

export const Edit = async (data: PassengerEditInput): Promise<void> => {
  await API.put(`passenger`, data)
}

export const Delete = async (id: string): Promise<void> => {
  await API.delete(`passenger/${id}`)
}
