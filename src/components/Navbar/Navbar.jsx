import React, { useContext } from "react";
import Moon from "../../assets/icon-moon.svg";
import Sun from "../../assets/icon-sun.svg";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="flex justify-between items-center">
      <div className="md:text-5xl text-4xl text-white font-semibold tracking-widest">
        TODO
      </div>
      <div onClick={toggle}>
        {mode === "dark" ? (
          <img
            src={Sun}
            alt=""
            className="h-8 w-8 transition ease-in-out active:opacity-40"
          />
        ) : (
          <img
            src={Moon}
            alt=""
            className="h-8 w-8 transition ease-in-out active:opacity-40"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
