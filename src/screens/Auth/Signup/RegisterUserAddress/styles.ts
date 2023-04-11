import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface InputWrapperError { hasError: boolean }

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(15)}px;
  padding-top: ${RFValue(30)}px;
`
export const ContentBody = styled.View`
  flex: 1;
  margin-top: ${RFValue(50)}px;
`

export const CEP = styled.View``


export const InputWrapper = styled.View`
  margin: ${RFValue(10)}px 0;
`
export const StreetNumberWrapper = styled.View`
  flex-direction: row;
`
export const Street = styled.View`
  flex: 0.7;
  margin-right: 5px;
`
export const Number = styled.View`
  flex: 0.3;
`
export const CEPComplementWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Complement = styled.View`
  flex: 1;
`
export const WrapperError = styled.View<InputWrapperError>`
 ${({ hasError, theme }) => css`
  border-bottom-color: ${hasError ? theme.COLORS.ATTENTION_LIGHT6 : "transparent"};
  border-bottom-width: 2px;
 `}
`
export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREEN};
`

export const ContentFooter = styled.View`
  margin-top: ${RFValue(10)}px;
  height: 50px;
`
export const IMGWrapper = styled.View`
    position: absolute;
    bottom: 100px;
    left: 33%;
    z-index: -10;
`

export const IMG = styled.Image``
