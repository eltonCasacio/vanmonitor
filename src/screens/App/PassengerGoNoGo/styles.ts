import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(15)}px;
  justify-content: space-between;
`

export const Header = styled.View``

export const Body = styled.View`
  flex: 1;
  margin-top: ${RFValue(50)}px;
`

export const TitleWrapper = styled.View`
  flex-direction: row;
`

export const GoNoGoWrapper = styled.View`
  border-radius: 5px;
  margin-bottom: ${RFValue(5)}px;
  `

export const GoNoGoItem = styled.View`
    margin: 10px 0;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsBold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.GRAY3};
  text-transform: uppercase;
  padding: 0 5px;
`
