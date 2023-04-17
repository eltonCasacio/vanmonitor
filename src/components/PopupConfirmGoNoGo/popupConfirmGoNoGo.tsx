import React from 'react'
import { GestureResponderEvent, Image, Modal, SafeAreaView } from 'react-native'
import theme from '@styles/theme'
import * as S from './styles'

import { Button } from '@components/Button/Button'
import AtentionImg from '@assets/images/atencao.png'

interface PopupProps {
    showMenu: boolean
    description: string
    confirm: () => void
    cancel: () => void
    onTouchStart?: ((event: GestureResponderEvent) => void) | undefined
}

export const PopupGoNoGo: React.FC<PopupProps> = ({
    showMenu,
    description,
    confirm,
    cancel,
    onTouchStart
}) => {
    return (
        <Modal transparent visible={showMenu}>
            <SafeAreaView onTouchEnd={onTouchStart} style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND_POPUP }}>
                <S.Container>
                    <S.H1>Atencao!!</S.H1>
                    <Image source={AtentionImg} />
                    <S.Description>{description}</S.Description>
                    <S.H3>Válido somente para hoje!</S.H3>
                    <S.ButtonContainer>
                        <S.Button>
                            <Button
                                title='Confirmar'
                                onPress={confirm}
                                style={{ backgroundColor: theme.COLORS.GREEN }}
                            />
                        </S.Button>

                        <S.Button>
                            <Button
                                title='Cancelar'
                                onPress={cancel}
                                style={{ backgroundColor: theme.COLORS.GRAY4 }}
                            />
                        </S.Button>
                    </S.ButtonContainer>
                </S.Container>
            </SafeAreaView>
        </Modal>
    )
}
