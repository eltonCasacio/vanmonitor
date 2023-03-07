import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin: ${RFValue(3)}px 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Content = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const InfoWrapper = styled.View`
  flex: 1;
  padding: 0 5px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsBold};
  color: ${({ theme }) => theme.COLORS.GREEN};
  margin-bottom: -10px;
`
export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsLightItalic};
  color: ${({ theme }) => theme.COLORS.GRAY3};
`

export const Edit = styled.TouchableOpacity`
  align-items: center;
  height: 100%;
  width: ${RFValue(45)}px;
  padding-top: ${RFValue(14)}px;
`
