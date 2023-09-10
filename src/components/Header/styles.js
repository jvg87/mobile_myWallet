import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 24px 24px 24px;
  width: 100%;
  background-color: #081c15;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-left: 15px;
  color: #fcfcfc;
`;

export const BtnMenu = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const BtnEye = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
