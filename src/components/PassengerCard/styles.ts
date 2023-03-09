import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 5px;
  margin: ${RFValue(3)}px 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
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
  font-family: ${({ theme }) => theme.FONTS.PoppinsExtraBold};
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.GREEN};
  margin-bottom: -5px;
  text-transform: uppercase;
`
export const Subtitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.PoppinsLightItalic};
  color: ${({ theme }) => theme.COLORS.GRAY3};
`

export const Edit = styled.TouchableOpacity`
  align-items: center;
  height: 100%;
  width: ${RFValue(45)}px;
  padding-top: ${RFValue(14)}px;
`
