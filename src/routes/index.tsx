import React from 'react'
import { useAuth } from 'contexts/auth'
import { View, ActivityIndicator } from 'react-native'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export const Routes = () => {
  const { signed, loading } = useAuth()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  return signed
    ? <AppRoutes />
    : <AuthRoutes />
}
