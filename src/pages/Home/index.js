import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
import * as S from './styles';

export default function Home() {
  const { showValue, setShowValue } = useContext(AuthContext);
  return (
    <S.Container>
      <Header title="Resumo" />
      <S.HeaderHome>
        <S.Message>Bem vindo, John</S.Message>
        <S.BtnEye onPress={() => setShowValue(!showValue)}>
          {showValue ? (
            <Icon name="eye-off" size={22} color="#fcfcfc" />
          ) : (
            <Icon name="eye" size={22} color="#fcfcfc" />
          )}
        </S.BtnEye>
      </S.HeaderHome>
      <S.CardBalance>
        <S.Text>Seu saldo é de:</S.Text>
        {showValue ? (
          <S.Balance animation="bounceIn">R$ 1000</S.Balance>
        ) : (
          <S.Skeleton animation="bounceIn" />
        )}
      </S.CardBalance>
    </S.Container>
  );
}
