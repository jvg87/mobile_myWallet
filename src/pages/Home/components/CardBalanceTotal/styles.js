import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  height: 120px;
  background-color: #fcfcfc;
  margin-top: -62px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 76px;
  border-radius: 10px;
  z-index: 98;
`;
export const CardHeader = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Text = styled.Text`
  font-size: 18px;
  color: #081c15;
  margin: 10px 0;
`;
export const BtnEdit = styled.TouchableOpacity`
  position: absolute;
  right: 24px;
`;
export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 18px;
`;
export const Balance = styled(Animatable.Text)`
  font-size: 22px;
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
