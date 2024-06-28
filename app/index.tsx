import { Text, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useAuth } from "@/context/Auth";
import { ButtonLogin, Container, InputField } from "@/styles/Login/styles";
import { ThemedText } from "@/components/ThemedText";

const Page = () => {
  const [username, setUsername] = useState("user");
  const [passowrd, setPassowrd] = useState("user");
  const { onLogin } = useAuth();

  const onSignInPress = () => {
    onLogin!(username, passowrd);
  };
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text>Login</Text>
      <InputField
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <InputField
        value={passowrd}
        onChangeText={setPassowrd}
        placeholder="Password"
        secureTextEntry
      />

      <ButtonLogin onPress={onSignInPress}>
        <ThemedText>Login</ThemedText>
      </ButtonLogin>
    </Container>
  );
};

export default Page;
