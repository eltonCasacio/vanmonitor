import React from 'react'
import { GestureResponderEvent, Modal, SafeAreaView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import * as S from './styles'

interface Option {
  title: string
  iconName: string
  action: () => void
}

interface PopupMenuProps {
  showMenu: boolean
  options?: Option[]
  onTouchStart?: ((event: GestureResponderEvent) => void) | undefined
}

const renderItem = (option: Option) => {
  return (
    <S.Item key={option.title} onPress={option.action}>
      <Feather name={option.iconName} size={20} color={option.iconName == 'delete'? 'red': 'black'}/>
      <S.Title iconName={option.iconName} >{option.title}</S.Title>
    </S.Item>
  )
}
export const PopupMenu: React.FC<PopupMenuProps> = ({ showMenu, options, onTouchStart }) => {

  return (
    <Modal transparent visible={showMenu}>
      <SafeAreaView onTouchEnd={onTouchStart} style={{ flex: 1 }}>
        <S.Items>
          {options?.map((option) => renderItem(option))}
        </S.Items>
      </SafeAreaView>
    </Modal>
  )
}
