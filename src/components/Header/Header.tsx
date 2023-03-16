import React, { useState } from 'react'
import { NavigationContext } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from '@styles/theme'
import * as S from './styles'

import { PopupMenu } from '@components/PopupMenu'
import { PopupConfirmation } from '@components/PopupConfirmation'
import { useAuth } from '@contexts/auth'
import { DeleteAccont } from '@services/monitor'
interface HeaderProps {
  comeBack?: boolean
}

export const Header: React.FC<HeaderProps> = ({ comeBack }) => {
  const navigation = React.useContext(NavigationContext)
  const { signout, user } = useAuth()

  const [showMenu, setShowMenu] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

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
    },
    {
      title: 'excluir conta',
      iconName: 'delete',
      action: () => handleDeleteAccount()
    }
  ]

  const handleDeleteAccount = () => {
    setShowConfirmDelete(true)
  }

  const handleConfirm = async () =>{
    DeleteAccont(user?.ID!).then(() => signout())
  }

  return (
    <S.Container>
      {comeBack &&
        <S.GoBack onPress={() => navigation?.goBack()}>
          <Ionicons
            name={'arrow-back-outline'}
            size={30}
            color={theme.COLORS.GREEN}
          />
        </S.GoBack>
      }
      <S.Menu onPress={() => setShowMenu(true)}>
        <Ionicons
          name={'ellipsis-vertical'}
          size={30}
          color={theme.COLORS.GREEN}
        />
      </S.Menu>
      <PopupMenu
        showMenu={showMenu}
        onTouchStart={() => setShowMenu(false)}
        options={options}
      />

      <PopupConfirmation
        showMenu={showConfirmDelete}
        title='Confirmar exclusão da conta'
        subTitle='Ao excluir a conta você perderá acesso as rotas e todos os outros serviços.'
        confirm={handleConfirm}
        cancel={() => setShowConfirmDelete(false)}
        onTouchStart={() => setShowConfirmDelete(false)}
      />
    </S.Container>
  )
}

