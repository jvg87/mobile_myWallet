import React, { useContext, useState } from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ButtonTransaction from '../../components/ButtonTransaction';
import Header from '../../components/Header';
import ModalTransaction from '../../components/ModalTransaction';
import { AuthContext } from '../../contexts/auth';
import CardBalanceTotal from './components/CardBalanceTotal';
import CardTransactionHome from './components/CardTransactionHome';
import ModalUpdateBalance from './components/ModalUpdateBalance';
import * as S from './styles';

const greetingMessage = () => {
  const time = new Date().getHours();
  let greeting;
  if (time <= 12) {
    greeting = 'Bom dia';
  } else if (time <= 19) {
    greeting = 'Boa tarde';
  } else {
    greeting = 'Boa noite';
  }
  return greeting;
};

export default function Home() {
  const { showValue, setShowValue, user, showModalTransaction, setShowModalTransaction } =
    useContext(AuthContext);

  const [showModalUpdate, setShowModalUpdate] = useState(false);

  const greetingHours = greetingMessage();

  return (
    <S.Container>
      <Header title="Resumo" />

      <S.HeaderHome>
        <S.Message numberOfLines={1}>
          {greetingHours}, {user.name}
        </S.Message>
        <S.BtnEye onPress={() => setShowValue(!showValue)}>
          {showValue ? (
            <Icon name="eye-off" size={22} color="#fcfcfc" />
          ) : (
            <Icon name="eye" size={22} color="#fcfcfc" />
          )}
        </S.BtnEye>
      </S.HeaderHome>

      <CardBalanceTotal openModal={() => setShowModalUpdate(true)} />

      <CardTransactionHome />

      <Modal
        visible={showModalTransaction}
        animationType="slide"
        transparent
        onRequestClose={() => setShowModalTransaction(false)}
      >
        <ModalTransaction />
      </Modal>

      <Modal
        visible={showModalUpdate}
        animationType="fade"
        transparent
        onRequestClose={() => setShowModalUpdate(false)}
      >
        <ModalUpdateBalance closeModal={() => setShowModalUpdate(false)} />
      </Modal>

      <ButtonTransaction />
    </S.Container>
  );
}
