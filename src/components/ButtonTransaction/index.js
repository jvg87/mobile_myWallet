import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../contexts/auth';
import * as S from './styles';

export default function ButtonTransaction() {
  const { showModalTransaction, setShowModalTransaction } = useContext(AuthContext);

  const openModal = () => {
    setShowModalTransaction(!showModalTransaction);
  };
  return (
    <S.Container style={{ elevation: 10 }} onPress={openModal}>
      {showModalTransaction ? (
        <Icon name="x" size={30} color="#081C15" />
      ) : (
        <Icon name="plus" size={30} color="#081C15" />
      )}
    </S.Container>
  );
}
