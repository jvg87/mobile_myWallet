import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import * as S from './styles';

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.BtnMenu onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={35} color="#fcfcfc" />
      </S.BtnMenu>
      {title && <S.Title>{title}</S.Title>}
    </S.Container>
  );
}
