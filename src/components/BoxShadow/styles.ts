import styled from "styled-components/native"
import { StyleSheet } from "react-native";

export const Container = styled.View``
export const Shadow = StyleSheet.create({
  containerStyle: {
    borderColor: '#ccc',
    borderBottomWidth: 2,
    borderTopWidth: 0.8,
    borderRightWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 1,
  }
})
