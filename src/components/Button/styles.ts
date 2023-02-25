import styled, { css } from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import theme from "@styles/theme";

export const Button = styled(RectButton)`
    width: ${RFValue(120)}px;
    height:  ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${({ theme }) => theme.COLORS.GRAY6};
`

export const ImgButton = styled.Image`
  width: ${RFValue(30)}px;
  height:  ${RFValue(30)}px;
`

export const Title = styled.Text`
  font-size:  ${RFValue(15)}px;
  font-family: ${theme.FONTS.PoppinsLight};
  margin-left: ${RFValue(5)}px;
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
