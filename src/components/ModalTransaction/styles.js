import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.9);
  position: relative;
`;

export const BntContainerPage = styled.TouchableOpacity`
  flex: 1;
  z-index: 9;
`;

export const BtnRevenue = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 170px;
  right: 25px;
  z-index: 10;
`;

export const BtnExpense = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  bottom: 100px;
  right: 25px;
  z-index: 10;
`;

export const Text = styled.Text`
  color: #fcfcfc;
  font-size: 16px;
  font-weight: bold;
`;

export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #081c15;
  border-radius: 25px;
`;
