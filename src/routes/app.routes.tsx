import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/App/Home/Home';

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
    </Navigator>
  )
}
