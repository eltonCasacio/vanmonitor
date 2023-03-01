import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

var screenSize = Dimensions.get('screen').width

export const Container = styled.View`
  height: 100%;
  justify-content: space-between;
  padding: ${RFValue(50)}px ${RFValue(20)}px ${RFValue(20)}px;
`
export const ContentHeader = styled.View`
  align-items: center;
`
export const ContentBody = styled.View``
export const ContentFooter = styled.View``

export const Description = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GREEN};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.FONTS.PoppinsItalic};
  `}
`

export const Title = styled.Text`
 ${({ theme }) => css`
    text-align: center;
    color: ${theme.COLORS.GREEN};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.FONTS.PoppinsItalic};
  `}
`

export const InputWrapper = styled.View`
  margin: ${RFValue(10)}px 0;
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
