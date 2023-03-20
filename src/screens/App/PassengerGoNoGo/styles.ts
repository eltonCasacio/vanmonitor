import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(15)}px;
  justify-content: space-between;
`

export const Header = styled.View``

export const Body = styled.View`
  margin-top: ${RFValue(50)}px;
`

export const TitleWrapper = styled.View`
  flex-direction: row;
`

export const GoNoGoWrapper = styled.View`
  padding: ${RFValue(5)}px;
  background-color: ${({theme}) => theme.COLORS.WHITE_100};
  border-radius: 5px;
  margin-bottom: ${RFValue(5)}px;
`

export const Observation = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  border-radius:${RFValue(10)}px;
  padding: ${RFValue(10)}px ${RFValue(30)}px;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsBold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.GRAY3};
  text-transform: uppercase;
  padding: 0 5px;
`

export const MarketingWrapper = styled.TouchableOpacity``
export const MarketingIMG = styled.Image`
  width: 100%;
  height: 100px;
  margin-top: ${RFValue(10)}px;
`

export const Footer = styled.View`
 margin-top: ${RFValue(10)}px;
  height: 50px;
`
