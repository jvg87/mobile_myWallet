import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e9e9e9;
`;

export const HeaderHome = styled.View`
  background-color: #081c15;
  /* background-color: red; */
  padding: 24px 24px 102px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px 0px 10px 10px;
`;

export const Message = styled.Text`
  color: #fcfcfc;
  font-size: 22px;
`;

export const BtnEye = styled.TouchableOpacity``;

export const CardBalance = styled.View`
  justify-content: center;
  align-items: center;
  padding: 18px;
  height: 120px;
  background-color: #fcfcfc;
  /* background-color: red; */
  margin-top: -62px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 14px;
  border-radius: 10px;
  z-index: 99;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #081c15;
  margin: 10px 0;
`;
export const Balance = styled(Animatable.Text)`
  font-size: 26px;
  font-weight: bold;
  color: #081c15;
`;

export const Skeleton = styled(Animatable.View)`
  margin: 12px 0;
  width: 120px;
  height: 12px;
  background-color: #1b4332;
  border-radius: 8px;
`;
