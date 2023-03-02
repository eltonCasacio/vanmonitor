import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin: 0 25px;
`

export const Card = styled.View`
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
`

export const CardDescription = styled.Text`
color: ${({ theme }) => theme.COLORS.BLACK};
font-size: ${RFValue(15)}px;
font-family: ${({theme}) => theme.FONTS.PoppinsMediumItalic};
text-align: center;
`

export const CardIMG = styled.Image`
 height: 50px;
  width: 50px;
`
