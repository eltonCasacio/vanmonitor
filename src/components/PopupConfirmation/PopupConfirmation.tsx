import React, { useState } from 'react'
import { GestureResponderEvent, Modal, SafeAreaView } from 'react-native'
import { Button } from '@components/Button'
import * as S from './styles'
import theme from '@styles/theme'

interface PopupProps {
  title: string
  subTitle: string
  showMenu: boolean
  confirm: () => void
  cancel: () => void
  onTouchStart?: ((event: GestureResponderEvent) => void) | undefined
}

export const PopupConfirmation: React.FC<PopupProps> = ({
  title,
  subTitle,
  showMenu,
  confirm,
  cancel,
  onTouchStart
}) => {
  return (
    <Modal transparent visible={showMenu}>
      <SafeAreaView onTouchEnd={onTouchStart} style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND_POPUP }}>
        <S.Container>

          <S.Title>{title}</S.Title>
          <S.SubTitle>{subTitle}</S.SubTitle>

          <S.ButtonContainer>
            <S.Button>
              <Button
                title='Confirmar'
                onPress={confirm}
                style={{ backgroundColor: theme.COLORS.GREEN1 }}
              />
            </S.Button>

            <S.Button>
              <Button
                title='Cancelar'
                onPress={cancel}
                style={{ backgroundColor: theme.COLORS.GRAY }}
              />
            </S.Button>
          </S.ButtonContainer>
        </S.Container>
      </SafeAreaView>
    </Modal>
  )
}
