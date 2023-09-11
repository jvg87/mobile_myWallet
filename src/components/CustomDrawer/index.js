import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Logo from '../../assets/Logo.png';
import { AuthContext } from '../../contexts/auth';
import * as S from './styles';

export default function CustomDrawer(props) {
  const { signOut, user } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <S.Header>
        <S.Logo source={Logo} resizeMode="contain" />
        <S.Title>Seja bem-vindo(a),</S.Title>
        <S.Name numberOfLines={1}>{user && user.name}</S.Name>
      </S.Header>
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Sair"
        labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
        onPress={signOut}
        inactiveTintColor="#2d6a4f"
        icon={({ color, size }) => <Icon name="log-out" color={color} size={size} />}
      />
    </DrawerContentScrollView>
  );
}
