import { Login } from '@screens/Auth/Login/Login'
import { RegisterUser } from '@screens/Auth/Signup/RegisterUser/Registeruser'
import { RegisterAddressUser } from '@screens/Auth/Signup/RegisterUserAddress/Registeruseraddress'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName='Cadastro Usuario'>
      <Screen name="Login" component={Login} />
      <Screen
        name="Cadastro Usuario"
        component={RegisterUser}
        options={{
          title: 'Cadastro de Usuário',
          headerStyle: {backgroundColor: '#0fbfbf'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          }
        }}
      />
      <Screen name="Cadastro Endereco" component={RegisterAddressUser} />
    </Navigator>
  );
}
