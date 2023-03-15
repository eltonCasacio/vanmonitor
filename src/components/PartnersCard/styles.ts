import styled from "styled-components/native";

export const Card = styled.View`
  align-items: center;
  border-radius: 15px;
`

export const CardDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({theme}) => theme.FONTS.PoppinsMediumItalic};
`

export const CardIMG = styled.Image`
  height: 25px;
  width: 25px;
`
