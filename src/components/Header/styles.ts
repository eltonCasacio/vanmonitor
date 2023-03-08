import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${RFValue(10)}px ${RFValue(15)}px;
`

export const GoBack = styled.TouchableOpacity`
  flex: 1;
  justify-self: flex-start;
`

export const Menu = styled.TouchableOpacity`
`
