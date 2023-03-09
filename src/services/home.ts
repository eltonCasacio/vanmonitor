import API from './api'

export interface PassengerResponse {
  id: string
  name: string
  nickname: string
  routeCode: string
  goes: boolean
  comesback: boolean
  registerConfirmed: boolean
  schoolName: string
}

export async function GetPassengers(id: string): Promise<PassengerResponse[]> {
  try {
    const { data } = await API.get<PassengerResponse[]>(`passenger/list-passenger/${id}`)
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
