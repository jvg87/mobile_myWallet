import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
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
  const { showValue, setShowValue, user } = useContext(AuthContext);

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

      <S.CardBalance style={{ elevation: 5 }}>
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
      </S.CardBalance>

      <S.CardTransaction style={{ elevation: 5 }}>
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
      </S.CardTransaction>
    </S.Container>
  );
}
