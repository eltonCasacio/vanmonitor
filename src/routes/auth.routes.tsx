import { Login } from '@screens/Auth/Login/Login'
import { RegisterUser } from '@screens/Auth/Signup/RegisterUser/Registeruser'
import { RegisterAddressUser } from '@screens/Auth/Signup/RegisterUserAddress/Registeruseraddress'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Theme from '@styles/theme'

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: Theme.COLORS.GREEN,
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro Usuario" component={RegisterUser} />
      <Screen name="Cadastro Endereco" component={RegisterAddressUser} />
    </Navigator>
  );
}
