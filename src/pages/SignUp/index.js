import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import * as yup from 'yup';
import * as S from './styles';

import Logo from '../../assets/Logo.png';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    name: yup
      .string()
      .required('Nome é obrigatório!')
      .min(3, 'O nome deve ter no mínimo 3 caracteres'),
    email: yup.string().required('Email é obrigatório!').email('Email invalido'),
    password: yup
      .string()
      .required('Senha é obrigatória!')
      .min(6, 'A senha deve ter no mínimo 6 dígitos'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = (data) => {
    signUp(data);
  };

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
          {errors.name ? (
            <S.ErrorLabel>{errors.name?.message}</S.ErrorLabel>
          ) : (
            <S.Label>Nome</S.Label>
          )}
          <S.AreaInput>
            <S.LabelIcon>
              <Icon name="user" size={20} color="#40916C" />
            </S.LabelIcon>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <S.Input
                  placeholder="Nome do Usuário"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={{ borderColor: errors.name && '#ff375b', borderWidth: errors.name && 1 }}
                />
              )}
            />
          </S.AreaInput>

          {errors.email ? (
            <S.ErrorLabel>{errors.email?.message}</S.ErrorLabel>
          ) : (
            <S.Label>Email</S.Label>
          )}
          <S.AreaInput>
            <S.LabelIcon>
              <Icon name="mail" size={20} color="#40916C" />
            </S.LabelIcon>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <S.Input
                  placeholder="email@email.com"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  style={{ borderColor: errors.email && '#ff375b', borderWidth: errors.email && 1 }}
                />
              )}
            />
          </S.AreaInput>

          {errors.password ? (
            <S.ErrorLabel>{errors.password?.message}</S.ErrorLabel>
          ) : (
            <S.Label>Senha</S.Label>
          )}
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
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <S.Input
                    placeholder="******"
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={{
                      borderColor: errors.password && '#ff375b',
                      borderWidth: errors.password && 1,
                    }}
                  />
                )}
              />
            ) : (
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <S.Input
                    placeholder="******"
                    secureTextEntry
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    style={{
                      borderColor: errors.password && '#ff375b',
                      borderWidth: errors.password && 1,
                    }}
                  />
                )}
              />
            )}
          </S.AreaInput>
        </S.InputContainer>
        <S.ContainerBtn>
          <S.BtnLogin onPress={handleSubmit(handleSignUp)}>
            <S.BtnTextLogin>Registrar</S.BtnTextLogin>
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
