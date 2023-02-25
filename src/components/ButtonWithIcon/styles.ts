import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";
import theme from "@styles/theme";
import Fontisto from 'react-native-vector-icons/Fontisto'

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${RFValue(120)}px;
    height:  ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`

export const IconFacebook = styled(Fontisto)`
 font-size:  ${RFValue(25)}px;
 color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
  font-size:  ${RFValue(15)}px;
  font-family: ${theme.FONTS.PoppinsLight};
  color: ${({ theme }) => theme.COLORS.WHITE};
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
