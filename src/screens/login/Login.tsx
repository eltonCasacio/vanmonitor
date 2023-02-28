import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import * as S from './styles'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'
import { useTheme } from 'styled-components'

const Login: React.FC = () => {
  const { COLORS } = useTheme()
  const [value, setValue] = useState("")

  return (
    <SafeAreaView>
      <S.Container>
        <S.ContentHeader>
          <S.Title>Seja bem vindo(a) a Horus</S.Title>
        </S.ContentHeader>
        <S.ContentBody>
          <S.Description>Login</S.Description>
          <InputMask
            leftIcon
            iconNameLeft='card-outline'
            inputType='cpf'
            iconSize={35}
            placeholder={'digite seu CPF'}
            inputValue={value}
            onChangeText={text => setValue(text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <S.CreateAccount>criar conta</S.CreateAccount>
        </S.ContentBody>
        <S.ContentFooter>
          <Button
            title='button'
            onPress={() => { }}
          />
        </S.ContentFooter>
      </S.Container>
    </SafeAreaView>
  )
}

export { Login }
