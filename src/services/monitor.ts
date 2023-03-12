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
}

export async function Register(monitorData: MonitorRegisterInput): Promise<void> {
  await API.post(`monitor`, monitorData)
}
