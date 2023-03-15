import React, { useState } from 'react'
import { Alert } from 'react-native'
import { NavigationContext, useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from '@styles/theme'
import * as S from './styles'

import { PopupMenu } from '@components/PopupMenu'
import { useAuth } from '@contexts/auth'

interface HeaderProps {
  comeBack?: boolean
}

export const Header: React.FC<HeaderProps> = ({ comeBack }) => {
  const navigation = React.useContext(NavigationContext)
  const { signout } = useAuth()

  const [showMenu, setShowMenu] = useState(false)
  const options = [
    {
      title: 'home',
      iconName: 'home',
      action: () => navigation?.navigate("Home")
    },
    {
      title: 'passageiro',
      iconName: 'user',
      action: () => navigation?.navigate("PassengerRegister")
    },
    {
      title: 'parceiros',
      iconName: 'users',
      action: () => navigation?.navigate("Home")
    },
    {
      title: 'sair',
      iconName: 'log-out',
      action: () => signout()
    }
  ]

  return (
    <S.Container>
      {comeBack &&
        <S.GoBack onPress={() => navigation?.goBack()}>
          <Ionicons
            name={'arrow-back-outline'}
            size={24}
            color={theme.COLORS.GREEN}
          />
        </S.GoBack>
      }
      <S.Menu onPress={() => setShowMenu(true)}>
        <Ionicons
          name={'ellipsis-vertical'}
          size={24}
          color={theme.COLORS.GREEN}
        />
      </S.Menu>
      <PopupMenu
        showMenu={showMenu}
        onTouchStart={() => setShowMenu(false)}
        options={options}
      />
    </S.Container>
  )
}

