import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Input from '@components/Input'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'
import { useRoute } from '@react-navigation/native'
import { Alert } from 'react-native'
import { RouteProp } from '@react-navigation/native'

type Params = {
  nomeResponsavel: any,
  cpf:  any,
  telefone: any
}
type CustomRoute = RouteProp<Params, any>

const RegisterAddressUser: React.FC = () => {
  const {params} = useRoute<CustomRoute>()
  const [value, setValue] = useState("")

  useEffect(() => {
    Alert.alert(params?.cpf)
  }, [])

  return (
    <S.Container>
      <S.ContentHeader>
        <S.Description>Cadastro do Usuário</S.Description>
        <S.Title>Endereço</S.Title>
      </S.ContentHeader>
      <S.ContentBody>

        <S.InputWrapper>
          <S.StreetNumberWrapper>
            <S.Street>
              <Input
                placeholder={'Rua'}
                inputValue={value}
                onChangeText={text => setValue(text)}
                autoCapitalize='none'
                autoCorrect={false}
              />
            </S.Street>
            <S.Number>
              <Input
                placeholder={'Número'}
                inputValue={value}
                onChangeText={text => setValue(text)}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='numeric'
              />
            </S.Number>
          </S.StreetNumberWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.StreetNumberWrapper>
            <S.Street>
              <Input
                placeholder={'Cidade'}
                inputValue={value}
                onChangeText={text => setValue(text)}
                autoCapitalize='none'
                autoCorrect={false}
              />
            </S.Street>
            <S.Number>
              <Input
                placeholder={'UF'}
                inputValue={value}
                onChangeText={text => setValue(text)}
                autoCapitalize='none'
                autoCorrect={false}
              />
            </S.Number>
          </S.StreetNumberWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.CEPComplementWrapper>
            <S.CEP>
              <InputMask
                inputType='custom'
                mask='99.999-999'
                placeholder={'CEP'}
                inputValue={value}
                onChangeText={text => { }}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='numeric'
              />
            </S.CEP>
            <S.Complement>
              <Input
                placeholder={'Complemento'}
                inputValue={value}
                onChangeText={text => setValue(text)}
                autoCapitalize='none'
                autoCorrect={false}
              />
            </S.Complement>
          </S.CEPComplementWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <Input
            placeholder={'Bairro'}
            inputValue={value}
            onChangeText={text => setValue(text)}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </S.InputWrapper>

      </S.ContentBody>

      <S.ContentFooter>
        <Button
          title='proximo'
          onPress={() => { }}
        />
      </S.ContentFooter>
    </S.Container >
  )
}

export { RegisterAddressUser }
