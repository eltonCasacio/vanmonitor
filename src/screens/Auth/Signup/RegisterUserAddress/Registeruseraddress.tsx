import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { InputMask } from '@components/InputMask'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Register } from '@services/monitor'
import React, { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as S from './styles'
import axios from 'axios'
import Geolocation from '@react-native-community/geolocation'

interface ViaCEP {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}
const Address = {
    street: "",
    number: "",
    city: "",
    uf: "",
    cep: "",
    complement: "",
    neighbor: "",
    latitude: 0,
    longitude: 0,
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

    const changeCEP = useCallback(async () => {
        const res = address.cep.replace(".", "").replace("-", "")
        const url = `http://viacep.com.br/ws/${res}/json/`
        try {
            const { data } = await axios.get<ViaCEP>(url)
            setAddress({
                ...address,
                cep: address.cep,
                city: data.localidade,
                complement: data.complemento,
                neighbor: data.bairro,
                street: data.logradouro,
                uf: data.uf
            })
        } catch (error) {

        }
    }, [address])

    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition(info => {
            setAddress({ ...address, latitude: info.coords.latitude, longitude: info.coords.longitude })
        })
    }

    const handleSubmit = async () => {
        getCurrentPosition()
        if (await validate()) {
            Register({
                cep: address.cep,
                city: address.city,
                number: address.number,
                street: address.street,
                uf: address.uf,
                name: params.name,
                cpf: params.cpf,
                phone_number: params.phone,
                complement: address.complement,
                latitude: address.latitude.toString(),
                longitude: address.longitude.toString()
            })
                .then(() => navigate("Login"))
                .catch((err) => Alert.alert("Erro inesperado, tente mais tarde ou entre em contato com administrador", err))
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
                <ScrollView>
                    <S.WrapperError hasError={addressError.cep}>
                        <S.CEP>
                            <InputMask
                                label='cep'
                                inputType='custom'
                                mask='99.999-999'
                                inputValue={address.cep}
                                onChangeText={text => changeAddress('cep', text)}
                                onBlur={changeCEP}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='numeric'
                            />
                        </S.CEP>
                    </S.WrapperError>

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

                    <S.InputWrapper>
                        <S.Complement>
                            <Input
                                label='obs'
                                inputValue={address.complement}
                                onChangeText={text => changeAddress('complement', text)}
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </S.Complement>
                    </S.InputWrapper>

                </ScrollView>
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
