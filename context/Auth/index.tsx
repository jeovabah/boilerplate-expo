import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface AuthProps {
  authState: AuthState;
  onLogin: (username: string, password: string) => void;
  onLogout: () => void;
}

type AuthState = {
  authenticated: boolean | null;
  username: string | null;
};

const AuthContext = createContext<Partial<AuthProps>>({});

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<AuthState>({
    authenticated: false,
    username: null,
  } as AuthState);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      setAuthState({
        authenticated: true,
        username: "admin",
      });
      return;
    }
    setAuthState({
      authenticated: true,
      username: "admin",
    });

    AsyncStorage.setItem(
      "user",
      JSON.stringify({ username: "admin", name: "jeova" })
    );
  };

  const verifyAuth = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setAuthState({
        authenticated: true,
        username: JSON.parse(user).username,
      });
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  const logout = () => {
    setAuthState({
      authenticated: false,
      username: null,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
