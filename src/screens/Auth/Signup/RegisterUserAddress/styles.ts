import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

interface InputWrapperError { hasError: boolean }

var screenSize = Dimensions.get('screen').width

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(15)}px;
`

export const ContentBody = styled.View`
  flex: 1;
  justify-content: center;
`

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
export const CEP = styled.View`
  width: ${RFValue((screenSize / 2) - 60)}px;
  margin-right: 5px;
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
  height: 40px;
`
