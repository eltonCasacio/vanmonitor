import API from './api'
import messaging from '@react-native-firebase/messaging'

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

export interface DriverResponse {
    id: string
    cpf: string
    name: string
    nickname: string
    phone: string
    uf: string
    city: string
    street: string
    number: string
    cep: string
}

export async function GetPassengers(id = ''): Promise<PassengerResponse[]> {
    try {
        const { data } = await API.get<PassengerResponse[]>(`passenger/list-passenger/${id}`)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function GetDriverByRouteCode(routeCode = ''): Promise<DriverResponse> {
    try {
        const { data } = await API.get<DriverResponse>(`monitor/getdriver-by-route/${routeCode}`)
        return data
    } catch (error) {
        throw new Error("get driver by route code error")
    }
}

export async function GetDeviceToken(): Promise<void> {
    try {
        messaging().getToken().then((token) => {
            console.debug("TOKEN DEVICE", token)
        })
    } catch (error) {
        throw new Error("get driver by route code error")
    }
}
