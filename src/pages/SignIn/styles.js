import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  /* align-items: center;
  justify-content: center; */
  background-color: #081c15;
`;

export const Header = styled(Animatable.View)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image``;

export const ContainerForm = styled(Animatable.View)`
  flex: 2;
  background-color: #fcfcfc;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 32px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const MessageContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: #2d6a4f;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Message = styled.Text`
  font-size: 16px;
  color: #1b4332;
`;

export const AreaInput = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  color: #081c15;
  font-size: 20px;
  margin: 10px 0;
`;

export const Input = styled.TextInput`
  background-color: #d8f3dc;
  height: 45px;
  font-size: 16px;
  padding: 14px;
  border-radius: 10px;
  color: #121212;
  margin-bottom: 18px;
`;

export const ContainerBtn = styled.View`
  width: 100%;
`;

export const BtnLogin = styled.TouchableOpacity`
  background-color: #2d6a4f;
  width: 100%;
  border-radius: 50px;
  padding: 12px;
  margin-top: 34px;
  justify-content: center;
  align-items: center;
`;

export const BtnTextLogin = styled.Text`
  color: #d8f3dc;
  font-size: 18px;
  font-weight: bold;
`;

export const BtnRegister = styled.TouchableOpacity`
  margin: 18px;
  align-self: center;
`;

export const BtnTextRegister = styled.Text`
  color: #2d6a4f;
  text-decoration: underline;
`;
export const BtnText = styled.Text`
  color: #9a9a9a;
`;
