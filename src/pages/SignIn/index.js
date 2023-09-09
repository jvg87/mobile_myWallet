import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import * as yup from 'yup';
import Logo from '../../assets/Logo.png';
import * as S from './styles';

export default function SignIn() {
  const navigate = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
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

  const handleSignIn = (data) => {
    console.log(data);
  };

  return (
    <S.Container behavior="padding">
      <S.Header animation="fadeInDown" delay={400}>
        <S.Logo source={Logo} />
      </S.Header>
      <S.ContainerForm animation="fadeInUp" delay={200}>
        <S.MessageContainer animation="fadeInLeft" delay={800}>
          <S.Title>Bem-vindo(a) de volta</S.Title>
          <S.Message>Faça seu login</S.Message>
        </S.MessageContainer>
        <S.InputContainer>
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
          <S.BtnLogin onPress={handleSubmit(handleSignIn)}>
            <S.BtnTextLogin>Acessar</S.BtnTextLogin>
          </S.BtnLogin>
          <S.BtnRegister onPress={() => navigate.navigate('SignUp')}>
            <S.BtnText>
              Não possui uma conta? <S.BtnTextRegister>Cadastre-se!</S.BtnTextRegister>{' '}
            </S.BtnText>
          </S.BtnRegister>
        </S.ContainerBtn>
      </S.ContainerForm>
    </S.Container>
  );
}
