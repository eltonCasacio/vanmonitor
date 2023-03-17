import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { InputMask } from '@components/InputMask'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Register } from '@services/monitor'
import React, { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import * as S from './styles'

const Address = {
  street: "",
  number: "",
  city: "",
  uf: "",
  cep: "",
  complement: "",
  neighbor: ""
}

const AddressError = {
  street: false,
  number: false,
  city: false,
  uf: false,
  cep: false,
  neighbor: false
}

type NavigationParams = {
  cpf: string
  name: string
  phone: string
}

const RegisterAddressUser: React.FC = () => {
  const params = useRoute().params as NavigationParams
  const { navigate } = useNavigation()
  const [address, setAddress] = useState(Address)
  const [addressError, setAddressError] = useState(AddressError)

  const changeAddress = useCallback((k: string, v: string) => {
    setAddress({ ...address, [k]: v })
  }, [address])

  const handleSubmit = async () => {
    if (await validate()) {
      Register({
        cep: address.cep,
        city: address.city,
        number: address.number,
        street: address.street,
        uf: address.uf,
        name: params.name,
        cpf: params.cpf,
        phone_number: params.phone
      })
        .then(() => navigate("Login"))
        .catch(() => Alert.alert("Erro inesperado, tente mais tarde ou entre em contato com administrador"))
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
                  label='rua'
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
                  label='nº'
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
                  label='cidade'
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
                  label='uf'
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
                  label='cep'
                  inputType='custom'
                  mask='99.999-999'
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
                label='complemento'
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
              label='bairro'
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
