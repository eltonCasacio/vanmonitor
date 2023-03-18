import { Dimensions } from "react-native";
import styled from "styled-components/native";

const height = Dimensions.get("screen").height

export const Container = styled.View`
  position: absolute;
  top: ${height / 4}px;
  left: 15px;
  right: 15px;
  padding: 50px 30px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.COLORS.GRAY5};
  border-width: 1px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsBold};
  font-size: 18px;
  text-transform: uppercase;
  padding-top: 5px;
  padding-left: 5px;
`

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsMedium};
  padding-top: 5px;
  padding-left: 5px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: auto;
`


export const Button = styled.View`
  flex: 0.4;
  margin-top: 30px;
`
