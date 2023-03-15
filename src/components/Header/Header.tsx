import React from 'react'
import * as S from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import theme from '@styles/theme'

interface HeaderProps {
  comeBack?: boolean
}
export const Header: React.FC<HeaderProps> = ({ comeBack }) => {
  const { goBack } = useNavigation()
  return (
    <S.Container>
      {comeBack &&
        <S.GoBack onPress={() => goBack()}>
          <Ionicons
            name={'arrow-back-outline'}
            size={24}
            color={theme.COLORS.GREEN}
          />
        </S.GoBack>
      }
      <S.Menu onPress={() => {}}>
        <Ionicons
          name={'ellipsis-vertical'}
          size={24}
          color={theme.COLORS.GREEN}
        />
      </S.Menu>
    </S.Container>
  )
}

