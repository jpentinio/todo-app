import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const Layout = ({ children }) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div className="min-h-screen">
      <div
        className={`${
          mode === "dark"
            ? "bg-mobile-dark md:bg-desktop-dark"
            : "bg-mobile-light md:bg-desktop-light"
        } bg-cover h-80 w-screen transition duration-1000 ease-in-out`}
      ></div>
      <div className="flex justify-center items-center absolute inset-x-0 top-24">
        {children}
      </div>
    </div>
  );
};

export default Layout;
