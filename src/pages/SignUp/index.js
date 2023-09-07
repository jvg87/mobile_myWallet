import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

import Logo from '../../assets/Logo.png';

export default function SignIn() {
  const navigate = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Container>
      <S.Header animation="fadeInDown" delay={400}>
        <S.Logo source={Logo} />
      </S.Header>
      <S.ContainerForm animation="fadeInUp" delay={200}>
        <S.MessageContainer animation="fadeInLeft" delay={800}>
          <S.Title>Registre-se agora</S.Title>
          <S.Message>Crie sua nova conta</S.Message>
        </S.MessageContainer>
        <S.InputContainer>
          <S.Label>Nome</S.Label>
          <S.AreaInput>
            <S.LabelIcon>
              <Icon name="user" size={20} color="#40916C" />
            </S.LabelIcon>
            <S.Input placeholder="username" />
          </S.AreaInput>
          <S.Label>Email</S.Label>
          <S.AreaInput>
            <S.LabelIcon>
              <Icon name="mail" size={20} color="#40916C" />
            </S.LabelIcon>
            <S.Input placeholder="email@email.com" />
          </S.AreaInput>
          <S.Label>Senha</S.Label>
          <S.AreaInput>
            <S.LabelIcon>
              <Icon name="lock" size={20} color="#40916C" />
            </S.LabelIcon>
            <S.LabelEye onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Icon name="eye-off" size={20} color="#40916C" />
              ) : (
                <Icon name="eye" size={20} color="#40916C" />
              )}
            </S.LabelEye>
            {showPassword ? (
              <S.Input placeholder="******" />
            ) : (
              <S.Input placeholder="******" secureTextEntry />
            )}
          </S.AreaInput>
        </S.InputContainer>
        <S.ContainerBtn>
          <S.BtnLogin>
            <S.BtnTextLogin>Acessar</S.BtnTextLogin>
          </S.BtnLogin>
          <S.BtnRegister onPress={() => navigate.goBack()}>
            <S.BtnText>
              Já possui uma conta? <S.BtnTextRegister>Faça o Login!</S.BtnTextRegister>{' '}
            </S.BtnText>
          </S.BtnRegister>
        </S.ContainerBtn>
      </S.ContainerForm>
    </S.Container>
  );
}
