import React, { createContext, useState, useEffect, useMemo } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState({
    colors: {
      primary: "blue",
      text: "#000000",
    },
  });
  // @TODO - Theme Dynamic
  // useEffect(() => {
  //   const fetchTheme = async () => {
  //     try {
  //       const cachedTheme = await AsyncStorage.getItem('theme');
  //       if (cachedTheme) {
  //         setTheme(JSON.parse(cachedTheme));
  //       } else {
  //         const response = await fetch('URL_DA_API');
  //         const data = await response.json();
  //         setTheme(data.theme);
  //         await AsyncStorage.setItem('theme', JSON.stringify(data.theme));
  //       }
  //     } catch (error) {
  //       console.error('Erro ao buscar o tema:', error);
  //     }
  //   };

  //   fetchTheme();
  // }, []);

  const memoizedTheme = useMemo(() => theme, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: memoizedTheme, setTheme }}>
      <StyledThemeProvider theme={memoizedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
