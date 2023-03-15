import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(5)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GREEN};
`

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const InfoWrapper = styled.View`
  padding: 0 5px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsExtraBold};
  color: ${({ theme }) => theme.COLORS.GREEN};
  text-transform: uppercase;
  line-height: 16px;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PoppinsLightItalic};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.GRAY3};
  line-height: 16px;
`

export const EditWrapper = styled.View`
  flex-direction: row;
  width: 110px;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
`

export const EditItem = styled.TouchableOpacity`
`
