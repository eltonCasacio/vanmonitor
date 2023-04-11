import API from './api'

interface MonitorRegisterInput {
    name: string
    cpf: string
    phone_number: string
    uf: string
    city: string
    street: string
    number: string
    cep: string
    complement: string
    latitude: string,
    longitude: string
}

export async function Register(monitorData: MonitorRegisterInput): Promise<void> {
    await API.post(`monitor`, monitorData)
}

export async function DeleteAccont(monitorID: string): Promise<void> {
    await API.delete(`monitor/${monitorID}`)
}
