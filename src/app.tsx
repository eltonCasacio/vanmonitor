import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components/native'
import { RegisterAddressUser } from '@screens/Signup'
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={"transparent"}
      />
      <View>
        <RegisterAddressUser />
      </View>
    </ThemeProvider>
  )
}

export { App }
