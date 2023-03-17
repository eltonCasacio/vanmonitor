export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined,
      RegisterUser: undefined,
      RegisterAddress: {
        cpf: string,
        name: string,
        phone: string
      }
    }
  }
}
