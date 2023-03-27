import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { InputMask } from '@components/InputMask'
import { Button } from '@components/Button'
import { useAuth } from 'contexts/auth'
import { FormatCPF } from '@utils/Auth/convertToOnlyNumbers'
import { useNavigation } from '@react-navigation/native'

export const Login: React.FC = () => {
  const { navigate } = useNavigation()
  const { signin } = useAuth()
  const [cpf, setCPF] = useState("")
  const [hasError, setHasError] = useState("")

  const [buttonDisable, setButtonDisable] = useState(true)

  const handleSigup = () => navigate('RegisterUser')

  const handleSignin = () => {
    if (cpf.length == 11) {
      signin(cpf)
        .then(() => setHasError("cpf invalido"))
        .catch(() => setHasError("Erro inesperado, tente novamente mais tarde ou contacte o administrador"))
    }
  }

  const handleCPF = (value: string) => {
    FormatCPF(value).then(res => setCPF(res))

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
          label='cpf'
          inputType='cpf'
          inputValue={cpf}
          onChangeText={text => handleCPF(text)}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <S.CreateAccountWrapper onPress={handleSigup}>
          <S.CreateAccountText>Ainda não possui cadastro?</S.CreateAccountText>
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
