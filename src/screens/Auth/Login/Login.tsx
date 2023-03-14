import React, { useEffect, useState } from 'react'
import * as S from './styles'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'
import { useAuth } from 'contexts/auth'
import { NavigationContext } from '@react-navigation/native'

export const Login: React.FC = () => {
  const navigation = React.useContext(NavigationContext)
  const { signin } = useAuth()
  const [cpf, setCPF] = useState("")
  const [hasError, setHasError] = useState("")

  const [buttonDisable, setButtonDisable] = useState(true)

  const handleSigup = () => {
    navigation?.navigate('Cadastro Usuario')
  }

  async function handleSignin() {
    if (cpf.length == 14) {
      signin(cpf)
        .then(() => setHasError("cpf invalido"))
        .catch(() => setHasError("Erro inesperado, tente novamente mais tarde ou contacte o administrador"))

    }
  }

  useEffect(() => {
    setButtonDisable(cpf.length != 14)
  }, [cpf])

  return (
    <S.Container>
      <S.ContentHeader>
        <S.Title>Seja bem vindo(a) a Horus</S.Title>
      </S.ContentHeader>
      <S.ContentBody>
        <S.MessageError>{hasError && "CPF invalido"}</S.MessageError>
        <InputMask
          inputType='cpf'
          placeholder={'digite seu CPF'}
          inputValue={cpf}
          onChangeText={text => setCPF(text)}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <S.CreateAccountWrapper onPress={handleSigup}>
          <S.CreateAccountText>Não tem cadastro ainda?</S.CreateAccountText>
          <S.CreateAccountTextBold>Cadastre-se</S.CreateAccountTextBold>
        </S.CreateAccountWrapper>
      </S.ContentBody>
      <S.ContentFooter>
        <Button
          disabled={buttonDisable}
          title='confirmar'
          onPress={handleSignin}
        />
      </S.ContentFooter>
    </S.Container>
  )
}
