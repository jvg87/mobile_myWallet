import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1;
`;

export const BntContainerPage = styled.TouchableOpacity`
  flex: 1;
  z-index: 9;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.View`
  background-color: #fcfcfc;
  margin: 25px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  z-index: 10;
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

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 18px;
`;

export const Input = styled.TextInput`
  background-color: #d8f3dc;
  height: 45px;
  font-size: 16px;
  padding: 14px;
  border-radius: 10px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ButtonUpdate = styled.TouchableOpacity`
  padding: 8px 10px;
  background-color: #2d6a4f;
  margin-top: 10px;
  border-radius: 10px;
`;
export const ButtonCancel = styled.TouchableOpacity`
  padding: 8px 10px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #2d6a4f;
`;

export const ButtonTextUpdate = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fcfcfc;
`;
export const ButtonTextCancel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2d6a4f;
`;
