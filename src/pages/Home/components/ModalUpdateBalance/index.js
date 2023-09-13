import React from 'react';
import * as S from './styles';

export default function ModalUpdateBalance({ closeModal }) {
  const handleUpdateBalance = () => {
    closeModal();
  };
  return (
    <S.Container>
      <S.BntContainerPage onPress={closeModal}>
        <S.FormContainer>
          <S.CardHeader>
            <S.Text>Novo Valor</S.Text>
          </S.CardHeader>
          <S.Line />
          <S.Input keyboardType="numeric" />
          <S.ContainerButton>
            <S.ButtonUpdate onPress={handleUpdateBalance}>
              <S.ButtonTextUpdate>Atualizar</S.ButtonTextUpdate>
            </S.ButtonUpdate>
            <S.ButtonCancel onPress={closeModal}>
              <S.ButtonTextCancel>Cancelar</S.ButtonTextCancel>
            </S.ButtonCancel>
          </S.ContainerButton>
        </S.FormContainer>
      </S.BntContainerPage>
    </S.Container>
  );
}
