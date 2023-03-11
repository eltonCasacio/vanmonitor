import React, { useState } from 'react'
import * as S from './styles'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'
import { BoxShadow } from '@components/BoxShadow'
import { useAuth } from 'contexts/auth'

export const Login: React.FC = () => {
  const { signin } = useAuth()
  const [cpf, setCPF] = useState("")

  async function handleSignin() {
    if (cpf.length == 14) {
      signin(cpf)
    }
  }

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
            inputValue={cpf}
            onChangeText={text => setCPF(text)}
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
          onPress={handleSignin}
        />
      </S.ContentFooter>
    </S.Container>
  )
}
