export interface ScreenREGISTER_ADDRESS {
  cpf: string
  name: string
  phone: string
}

export interface ScreenEDIT {
  id: string
  name: string
  nickname: string
  routeCode: string
  goes: boolean
  comesback: boolean
  registerConfirmed: boolean
  schoolName: string
  driverName: string
}

export interface ScreenMAP {
  id: string
  name: string
  nickname: string
  routeCode: string
  goes: boolean
  comesback: boolean
  registerConfirmed: boolean
  schoolName: string
}

export interface ScreenGONOGO {
  id: string
  name: string
  nickname: string
  routeCode: string
  goes: boolean
  comesback: boolean
  registerConfirmed: boolean
  schoolName: string
}
