import React from 'react';
import Header from '../../components/Header';
import * as S from './styles';

export default function Home() {
  return (
    <S.Background>
      <Header title="Resumo" />
      <S.Teste>Página Home</S.Teste>
    </S.Background>
  );
}
