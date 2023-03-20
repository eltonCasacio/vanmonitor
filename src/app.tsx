import React from 'react';
import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components/native'
import { Routes } from '@routes/index'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from 'contexts/auth';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export { App }
