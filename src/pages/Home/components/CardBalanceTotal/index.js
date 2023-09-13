import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../../../contexts/auth';
import * as S from './styles';

export default function CardBalanceTotal() {
  const { showValue, user } = useContext(AuthContext);
  return (
    <S.Container style={{ elevation: 5 }}>
      <S.CardHeader>
        <S.Text>Seu saldo é de:</S.Text>
        <S.BtnEdit>
          <Icon name="edit" size={22} color="#121212" />
        </S.BtnEdit>
      </S.CardHeader>
      <S.Line />
      {showValue ? (
        <S.Balance animation="bounceIn">
          R${' '}
          {user.balance.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </S.Balance>
      ) : (
        <S.Skeleton animation="bounceIn" />
      )}
    </S.Container>
  );
}
