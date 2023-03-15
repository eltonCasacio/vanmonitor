import styled from 'styled-components/native'
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`
export const Header = styled.View`
margin: 15px;
  z-index: 999;
`

export const Map = styled(MapView)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const Footer = styled.View`
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
`
