import styled from 'styled-components/native'
import MapView from 'react-native-maps';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  justify-content: space-between;
`
export const Header = styled.View`
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
  height: 150px;
  padding: 15px;
  margin: 0 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
`
