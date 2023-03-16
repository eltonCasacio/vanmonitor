import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { InputMask } from '@components/InputMask'
import { Button } from '@components/Button'
import { useAuth } from 'contexts/auth'
import { NavigationContext } from '@react-navigation/native'
import { FormatCPF } from '@utils/Auth/convertToOnlyNumbers'

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
    if (cpf.length == 11) {
      signin(cpf)
        .then(() => setHasError("cpf invalido"))
        .catch(() => setHasError("Erro inesperado, tente novamente mais tarde ou contacte o administrador"))
    }
  }

  const handleCPF = async (value: string) => {
    const res = await FormatCPF(value)
    setCPF(res)
  }
  useEffect(() => {
    setButtonDisable(cpf.length != 11)
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
          onChangeText={text => handleCPF(text)}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <S.CreateAccountWrapper onPress={handleSigup}>
          <S.CreateAccountText>Não tem cadastro ainda?</S.CreateAccountText>
          <S.CreateAccountTextBold>Cadastre-se</S.CreateAccountTextBold>
        </S.CreateAccountWrapper>
      </S.ContentBody>
      <S.ContentFooter>
        <S.ButtonWrapper>
          <Button
            disabled={buttonDisable}
            title='confirmar'
            onPress={handleSignin}
          />
        </S.ButtonWrapper>
      </S.ContentFooter>
    </S.Container>
  )
}
