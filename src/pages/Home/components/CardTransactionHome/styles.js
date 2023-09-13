import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fcfcfc;
  margin-top: -62px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 14px;
  border-radius: 10px;
`;
export const HeaderTransaction = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const BtnPeriod = styled.TouchableOpacity``;

export const Period = styled.Text`
  font-size: 18px;
  color: #081c15;
  margin: 10px 0;
`;

export const ContainerItem = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 18px 0;
`;

export const Item = styled.View`
  align-items: center;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color: #081c15;
`;
export const BalanceRevenue = styled(Animatable.Text)`
  font-size: 18px;
  color: #40916c;
  font-weight: bold;
`;
export const BalanceExpense = styled(Animatable.Text)`
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
`;

export const BalanceTotal = styled(Animatable.Text)`
  font-size: 18px;
  font-weight: bold;
`;
export const SkeletonTransaction = styled(Animatable.View)`
  margin-top: 5px;
  margin-bottom: 7px;
  width: 80px;
  height: 12px;
  background-color: #1b4332;
  border-radius: 8px;
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
