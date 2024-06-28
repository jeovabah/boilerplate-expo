import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 20px;
  padding-top: 20%;
  padding-bottom: 20%;
  justify-content: center;
  align-items: center;
`;

export const InputField = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #333;
  border: 1px solid #333;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  justify-content: center;
  align-items: center;
`;
