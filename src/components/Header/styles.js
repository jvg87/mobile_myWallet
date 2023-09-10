import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 65px 15px;
  width: 100%;
  background-color: #081c15;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-left: 15px;
  margin-right: 15px;
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
