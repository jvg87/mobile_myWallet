import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../contexts/auth';
import ButtonTransaction from '../ButtonTransaction';
import * as S from './styles';

export default function ModalTransaction() {
  const { setShowModalTransaction } = useContext(AuthContext);

  const handleTransactionRevenue = () => {
    setShowModalTransaction(false);
    // TODO: CRIAR MODAL RENDA
  };
  const handleTransactionExpense = () => {
    setShowModalTransaction(false);
    // TODO: CRIAR MODAL DESPESA
  };

  return (
    <S.Container>
      <S.BntContainerPage onPress={() => setShowModalTransaction(false)} />
      <S.BtnExpense onPress={handleTransactionExpense}>
        <S.Text>Despesa</S.Text>
        <S.ContainerIcon>
          <Icon name="arrow-down" size={26} color="#e74c3c" />
        </S.ContainerIcon>
      </S.BtnExpense>
      <S.BtnRevenue onPress={handleTransactionRevenue}>
        <S.Text>Renda</S.Text>
        <S.ContainerIcon>
          <Icon name="arrow-up" size={26} color="#40916c" />
        </S.ContainerIcon>
      </S.BtnRevenue>
      <ButtonTransaction />
    </S.Container>
  );
}
