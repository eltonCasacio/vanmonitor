import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import * as S from './styles'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'
import { BoxShadow } from '@components/BoxShadow'

const Login: React.FC = () => {
  const [value, setValue] = useState("")

  return (
    <S.Container>
      <S.ContentHeader>
        <S.Title>Seja bem vindo(a) a Horus</S.Title>
      </S.ContentHeader>
      <S.ContentBody>
        <S.Description>Login</S.Description>
        <BoxShadow>
          <InputMask
            inputType='cpf'
            placeholder={'digite seu CPF'}
            inputValue={value}
            onChangeText={text => setValue(text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </BoxShadow>
        <S.CreateAccountWrapper onPress={() => { }}>
          <S.CreateAccountText>Não tem cadastro ainda?</S.CreateAccountText>
          <S.CreateAccountTextBold>Cadastre-se</S.CreateAccountTextBold>
        </S.CreateAccountWrapper>
      </S.ContentBody>
      <S.ContentFooter>
        <Button
          title='confirmar'
          onPress={() => { }}
        />
      </S.ContentFooter>
    </S.Container>
  )
}

export { Login }
