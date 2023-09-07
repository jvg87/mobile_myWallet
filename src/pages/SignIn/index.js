import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import * as S from './styles';

import Logo from '../../assets/Logo.png';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Container>
      <S.Header animation="fadeInDown" delay={400}>
        <S.Logo source={Logo} />
      </S.Header>
      <S.ContainerForm animation="fadeInUp" delay={200}>
        <S.MessageContainer animation="fadeInLeft" delay={800}>
          <S.Title>Bem-vindo(a) de volta</S.Title>
          <S.Message>Faça seu login</S.Message>
        </S.MessageContainer>
        <S.InputContainer>
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
          <S.BtnRegister>
            <S.BtnText>
              Não possui uma conta? <S.BtnTextRegister>Cadastre-se!</S.BtnTextRegister>{' '}
            </S.BtnText>
          </S.BtnRegister>
        </S.ContainerBtn>
      </S.ContainerForm>
    </S.Container>
  );
}
