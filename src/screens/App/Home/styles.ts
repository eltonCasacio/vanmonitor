import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  height: 100%;
  padding: ${RFValue(15)}px;
  justify-content: space-between;
`

export const Content = styled.View`
  padding: ${RFValue(10)}px 5px;
  margin: 0 ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 5px;
`

export const ContentTitle = styled.Text`
  font-family: ${({theme}) => theme.FONTS.PoppinsSemiBold};
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const PlusIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  width: 50px;
  height: 100%;
  color: ${({ theme }) => theme.COLORS.GRAY2};
`

export const Partners = styled.View`
  flex-direction: row;
  margin: 0 ${RFValue(10)}px;
  justify-content: space-between;
`

export const Footer = styled.View`
  justify-content: space-between;
`

export const MarketingWrapper = styled.TouchableOpacity`
  margin-bottom: 5px;
  `
export const MarketingIMG = styled.Image`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`

