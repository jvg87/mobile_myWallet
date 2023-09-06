import React from 'react';
import * as S from './styles';

import Logo from '../../assets/Logo.png';

export default function SignIn() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo source={Logo} />
      </S.Header>
      <S.ContainerForm>
        <S.MessageContainer>
          <S.Title>Bem-vindo(a) de volta</S.Title>
          <S.Message>Faça seu login</S.Message>
        </S.MessageContainer>
        <S.AreaInput>
          <S.Input placeholder="Email" />
          <S.Input placeholder="******" />
        </S.AreaInput>
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
