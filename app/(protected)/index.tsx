import { Button, Text } from "react-native";
import React from "react";
import { Container } from "@/styles/Login/styles";
import { useAuth } from "@/context/Auth";

const Page = () => {
  const { onLogout } = useAuth();
  return (
    <Container>
      <Text>Page</Text>
      <Button title="Logout" onPress={onLogout} />
    </Container>
  );
};

export default Page;
