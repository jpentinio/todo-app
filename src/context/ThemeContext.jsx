import { createContext, useState } from "react";

export const ThemeContext = createContext("");

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  //TOGGLE DARK/LIGHT MODE
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode: mode, toggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
