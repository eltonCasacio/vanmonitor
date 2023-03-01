import React from 'react';
import { View, StatusBar } from 'react-native';
import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components/native'

import {Signup} from '@screens/Signup/Signup'
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={"transparent"}
      />
      <View>
        <Signup />
      </View>
    </ThemeProvider>
  )
}

export { App }
