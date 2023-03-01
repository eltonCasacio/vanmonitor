import React from 'react';
import { View, StatusBar } from 'react-native';
import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components/native'
import { AuthRoutes } from '@routes/auth.routes'
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={"transparent"}
        />
        <AuthRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export { App }
