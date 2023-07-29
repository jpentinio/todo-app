import React from "react";
import Moon from "../../assets/icon-moon.svg";
import Sun from "../../assets/icon-sun.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-5xl font-semibold tracking-widest">TODO</div>
      <div>
        <img src={Sun} alt="" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Navbar;
