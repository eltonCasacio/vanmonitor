import styled, { css } from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import theme from "@styles/theme";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height:  ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: ${RFValue(5)}px;
`

export const Title = styled.Text`
  font-size:  ${RFValue(15)}px;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  font-family: ${theme.FONTS.PoppinsSemiBold};
  text-transform: uppercase;
`

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`



export const BoxShadow = styled.View``
export const Shadow = StyleSheet.create({
  containerStyle: {
    borderRadius: RFValue(5),
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderTopWidth: 0.5,
    borderRightWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  }
})
