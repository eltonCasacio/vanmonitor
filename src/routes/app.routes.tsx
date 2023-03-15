import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Map, Home, PassengerRegister, PassengerGoNoGo } from '@screens/App';

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='Map' component={Map} />
      <Screen name='PassengerRegister' component={PassengerRegister} />
      <Screen name='PassengerGoNoGo' component={PassengerGoNoGo} />
    </Navigator>
  )
}
