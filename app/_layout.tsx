import { AuthProvider, useAuth } from "@/context/Auth";
import { ThemeProvider } from "@/context/Theme";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

const StackLayout = () => {
  const { authState } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(protected)";

    if (!authState?.authenticated && inAuthGroup) {
      router?.replace("/");
    } else if (authState?.authenticated === true) {
      router?.replace("/(protected)");
    }
    console.log(authState);
  }, [authState]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <StackLayout />
      </AuthProvider>
    </ThemeProvider>
  );
}
