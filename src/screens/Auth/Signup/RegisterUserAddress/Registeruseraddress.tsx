import React, { useState } from 'react'
import * as S from './styles'
import Input from '@components/Input'
import InputMask from '@components/InputMask'
import { Button } from '@components/Button'
import { useRoute } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { Register } from '@services/monitor'
import { Alert } from 'react-native'
import { NavigationContext } from '@react-navigation/native'

type Params = {
  name: any,
  cpf: any,
  phone: any
}
type CustomRoute = RouteProp<Params, any>

interface Address {
  street: string
  number: string
  city: string
  uf: string
  cep: string
  complement: string
  neighbor: string
}

interface AddressError {
  street: boolean
  number: boolean
  city: boolean
  uf: boolean
  cep: boolean
  neighbor: boolean
}

const RegisterAddressUser: React.FC = () => {
  const navigation = React.useContext(NavigationContext)

  const { params } = useRoute<CustomRoute>()

  const [address, setAddress] = useState<Address>({
    cep: '',
    city: '',
    complement: '',
    neighbor: '',
    number: '',
    street: '',
    uf: ''
  })

  const [addressError, setAddressError] = useState<AddressError>({
    cep: false,
    city: false,
    neighbor: false,
    number: false,
    street: false,
    uf: false
  })

  const changeAddress = (k: string, v: string) => {
    setAddress({ ...address, [k]: v })
  }

  const handleSubmit = async () => {
    if (await validate()) {
      Register({
        cep: address.cep,
        city: address.city,
        number: address.number,
        street: address.street,
        uf: address.uf,
        name: params?.name,
        cpf: params?.cpf,
        phone_number: params?.phone
      })
      .then(() => navigation?.navigate("Login"))
      .catch(err => Alert.alert("Erro inesperado, tente mais tarde ou entre em contato com administrador"))
    }
  }

  async function validate(): Promise<boolean> {
    setAddressError({
      cep: address.cep.length != 10,
      city: address.city == "",
      neighbor: address.neighbor == "",
      number: address.number == "",
      street: address.street == "",
      uf: address.uf == ""
    })

    return address.cep.length == 10
      && address.city != ""
      && address.neighbor != ""
      && address.number != ""
      && address.street != ""
      && address.uf != ""
  }


  return (
    <S.Container>
      <S.ContentBody>
        <S.InputWrapper>
          <S.StreetNumberWrapper>
            <S.Street>
              <S.WrapperError hasError={addressError.street}>
                <Input
                  placeholder={'Rua'}
                  inputValue={address.street}
                  onChangeText={text => changeAddress('street', text)}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
              </S.WrapperError>
            </S.Street>
            <S.Number>
              <S.WrapperError hasError={addressError.number}>
                <Input
                  placeholder={'Número'}
                  inputValue={address.number}
                  onChangeText={text => changeAddress('number', text)}
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='numeric'
                />
              </S.WrapperError>
            </S.Number>
          </S.StreetNumberWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.StreetNumberWrapper>
            <S.Street >
              <S.WrapperError hasError={addressError.city}>
                <Input
                  placeholder={'Cidade'}
                  inputValue={address.city}
                  onChangeText={text => changeAddress('city', text)}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
              </S.WrapperError>
            </S.Street>
            <S.Number>
              <S.WrapperError hasError={addressError.uf}>
                <Input
                  placeholder={'UF'}
                  inputValue={address.uf}
                  onChangeText={text => changeAddress('uf', text)}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
              </S.WrapperError>
            </S.Number>
          </S.StreetNumberWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.CEPComplementWrapper >
            <S.WrapperError hasError={addressError.cep}>
              <S.CEP>
                <InputMask
                  inputType='custom'
                  mask='99.999-999'
                  placeholder={'CEP'}
                  inputValue={address.cep}
                  onChangeText={text => changeAddress('cep', text)}
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='numeric'
                />
              </S.CEP>
            </S.WrapperError>
            <S.Complement>
              <Input
                placeholder={'Complemento'}
                inputValue={address.complement}
                onChangeText={text => changeAddress('complement', text)}
                autoCapitalize='none'
                autoCorrect={false}
              />
            </S.Complement>
          </S.CEPComplementWrapper>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.WrapperError hasError={addressError.neighbor}>
            <Input
              placeholder={'Bairro'}
              inputValue={address.neighbor}
              onChangeText={text => changeAddress('neighbor', text)}
              autoCapitalize='none'
              autoCorrect={false}
            />
          </S.WrapperError>
        </S.InputWrapper>

      </S.ContentBody>

      <S.ContentFooter>
        <Button
          title='confirmar'
          onPress={handleSubmit}
        />
      </S.ContentFooter>
    </S.Container >
  )
}

export { RegisterAddressUser }
