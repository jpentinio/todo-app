import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <div className="bg-desktop-dark bg-cover h-80 w-screen"></div>
        <div className="flex justify-center items-center absolute inset-x-0 top-24">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
