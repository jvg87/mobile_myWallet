import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../../../contexts/auth';
import * as S from './styles';

export default function CardTransactionHome() {
  const { showValue } = useContext(AuthContext);
  return (
    <S.Container style={{ elevation: 5 }}>
      <S.HeaderTransaction>
        <S.BtnPeriod>
          <S.Period>Set. 2023</S.Period>
        </S.BtnPeriod>
        <S.BtnEdit>
          <Icon name="edit" size={22} color="#121212" />
        </S.BtnEdit>
      </S.HeaderTransaction>

      <S.Line />

      <S.ContainerItem>
        <S.Item>
          <S.ContainerTitle>
            <Icon name="arrow-up-circle" size={22} color="#40916c" />
            <S.Title>Renda</S.Title>
          </S.ContainerTitle>
          {showValue ? (
            <S.BalanceRevenue animation="bounceIn">R$ 50</S.BalanceRevenue>
          ) : (
            <S.SkeletonTransaction animation="bounceIn" />
          )}
        </S.Item>
        <S.Item>
          <S.ContainerTitle>
            <Icon name="arrow-down-circle" size={22} color="#e74c3c" />
            <S.Title>Despesa</S.Title>
          </S.ContainerTitle>
          {showValue ? (
            <S.BalanceExpense animation="bounceIn">R$ 25</S.BalanceExpense>
          ) : (
            <S.SkeletonTransaction animation="bounceIn" />
          )}
        </S.Item>
        <S.Item>
          <S.ContainerTitle>
            <Icon name="arrow-right-circle" size={22} />
            <S.Title>Balanço</S.Title>
          </S.ContainerTitle>
          {showValue ? (
            <S.BalanceTotal animation="bounceIn">R$ 20</S.BalanceTotal>
          ) : (
            <S.SkeletonTransaction animation="bounceIn" />
          )}
        </S.Item>
      </S.ContainerItem>
    </S.Container>
  );
}
