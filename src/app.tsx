import React from 'react';
import { View, StatusBar } from 'react-native';
import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components/native'

import {Login} from '@screens/login/Login'
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={"transparent"}
      />
      <View>
        <Login />
      </View>
    </ThemeProvider>
  )
}

export { App }
