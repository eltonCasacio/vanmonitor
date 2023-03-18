import {ScreenEDIT, ScreenGONOGO, ScreenMAP, ScreenREGISTER_ADDRESS} from './interfaces'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined,
      RegisterUser: undefined,
      RegisterAddress: ScreenREGISTER_ADDRESS,
      Home: undefined,
      Map: ScreenMAP,
      PassengerRegister: undefined,
      PassengerGoNoGo: ScreenGONOGO,
      PassengerEdit: ScreenEDIT,
    }
  }
}
