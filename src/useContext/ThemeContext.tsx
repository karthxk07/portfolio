import * as React from "react";
import { useState } from "react";

export const ThemeContext = React.createContext<string>("dark");
export const ToggleThemeContext = React.createContext<any | undefined>(
  undefined
);

export default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    console.log(theme);
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
