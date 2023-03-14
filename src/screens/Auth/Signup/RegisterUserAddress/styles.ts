import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

interface InputWrapperError { hasError: boolean }

var screenSize = Dimensions.get('screen').width

export const Container = styled.View`
  height: 100%;
  justify-content: space-between;
  padding: ${RFValue(20)}px;
  padding-top: ${RFValue(50)}px;
`

export const ContentBody = styled.View`
  flex: 1;
  justify-content: center;
`

export const ContentFooter = styled.View``

export const InputWrapper = styled.View`
  margin: ${RFValue(5)}px;
`

export const StreetNumberWrapper = styled.View`
  flex-direction: row;
`
export const Street = styled.View`
  width: ${(screenSize / 100) * 64}px;
  margin-right: 5px;
`
export const Number = styled.View`
  width: ${(screenSize / 100) * 23}px;
`


export const CEPComplementWrapper = styled.View`
flex-direction: row;

`
export const CEP = styled.View`
  width: ${(screenSize / 100) * 40}px;
  margin-right: 5px;
`
export const Complement = styled.View`
  width: ${(screenSize / 100) * 47}px;
`

export const WrapperError = styled.View<InputWrapperError>`
 ${({ hasError, theme }) => css`
  border-bottom-color: ${hasError ? theme.COLORS.ATTENTION_LIGHT6 : "transparent"};
  border-bottom-width: 2px;
 `}
`
