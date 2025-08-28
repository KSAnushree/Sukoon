import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 uppercase text-orange-700 ">
      <h1 className="text-amber-950 font-bold text-4xl w-full m-5">SUKOON.</h1>
      <ul className="hidden md:flex">
        <li className="p-5">Home</li>
        <li className="p-5">Library</li>
        <li className="p-5">Blog</li>
        <li className="p-5">Authors</li>
        <li className="p-5">About</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[25%] h-full border-r border-r-orange-400 bg-white ase-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-4xl font-bold text-amber-950 m-7 ">
          SUKOON.
        </h1>
        <ul className=" uppercase  text-orange-700 text-xl">
          <li className="p-7 border-b border-orange-700">Home</li>
          <li className="p-7 border-b border-orange-700">Library</li>
          <li className="p-7 border-b border-orange-700">Blog</li>
          <li className="p-7 border-b border-orange-700">Authors</li>
          <li className="p-7 ">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
