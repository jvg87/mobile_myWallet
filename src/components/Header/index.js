import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../contexts/auth';
import * as S from './styles';

export default function Header({ title }) {
  const { showValue, setShowValue } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.BtnMenu onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={35} color="#fcfcfc" />
      </S.BtnMenu>
      {title && <S.Title>{title}</S.Title>}
      <S.BtnEye onPress={() => setShowValue(!showValue)}>
        {showValue ? (
          <Icon name="eye-off" size={22} color="#fcfcfc" />
        ) : (
          <Icon name="eye" size={22} color="#fcfcfc" />
        )}
      </S.BtnEye>
    </S.Container>
  );
}
