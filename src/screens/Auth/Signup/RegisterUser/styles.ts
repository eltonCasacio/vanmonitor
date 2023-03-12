import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  height: 100%;
  justify-content: space-between;
  padding: ${RFValue(50)}px ${RFValue(20)}px ${RFValue(20)}px;
`

export const ContentHeader = styled.View`
  align-items: center;
`

export const ContentBody = styled.View`
  margin-bottom: ${RFValue(50)}px;
`

export const ContentFooter = styled.View`
`

interface InputWrapperProps { hasError: boolean }
export const InputWrapper = styled.View<InputWrapperProps>`
${({ hasError, theme }) => css`
  margin: ${RFValue(10)}px 0;
  border-bottom-color: ${hasError? theme.COLORS.ATTENTION_LIGHT6: "transparent"};
  border-bottom-width: 2px;
`}

`

export const Description = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GREEN};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.FONTS.PoppinsItalic};
  `}
`
