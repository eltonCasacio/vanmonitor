import styled from "styled-components/native"
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``
export const Shadow = StyleSheet.create({
  containerStyle: {
    borderColor: '#ccc',
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
