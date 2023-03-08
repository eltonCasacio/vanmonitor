import React from 'react';
import { StatusBar } from 'react-native';
import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components/native'
import { Routes } from '@routes/index'
import { NavigationContainer } from '@react-navigation/native';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor="transparent"
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export { App }
