import React, { useState } from "react";
import logo from "../imgs/logo.png";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  const [Toggle, setToggle] = useState(false);

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: .6,type:"spring",mass:.4}}
      className="my-14 font-serif"
    >
      <div className="mx-auto w-[90%] justify-between md:flex md:w-[80%] lg:w-[70%]">
        <div className="flex">
          <NavLink className="w-auto" to="/">
            <img className="w-1/2 md:w-[15rem] xl:w-[50%]" src={logo} alt="" />
          </NavLink>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className={`ms-auto flex flex-col gap-2 md:hidden [&>span]:block [&>span]:bg-black [&>span]:transition-all ${
              Toggle && "[&>span]:w-[50px]"
            }`}
          >
            <span className="block h-[4px] w-[50px] bg-black"></span>
            <span className="ms-auto block h-[4px] w-[25px] bg-black"></span>
            <span className="ms-auto block h-[4px] w-[30px] bg-black"></span>
          </button>
        </div>
        <div
          className={`${Toggle&&"!max-h-[100px]"} transition-all duration-500 overflow-hidden md:max-h-[100px] max-h-0  mt-4 flex justify-center border-t border-black md:mt-0 md:border-t-0`}
        >
          <ul className="mt-4 gap-5 sm:flex md:ms-auto md:mt-0 [&>a.active]:text-[#c23c22] [&>a]:transition-all after:[&>a]:block after:[&>a]:h-[1px] after:[&>a]:w-[0px] after:[&>a]:bg-[#1d1c1e] after:[&>a]:transition-all hover:[&>a]:text-[#e7816b] hover:after:[&>a]:w-[60%]">
            <NavLink to="/about">OUR COMPANY</NavLink>
            <NavLink to="/locations">LOCATIONS</NavLink>
            <NavLink to="/contact">CONTACTS</NavLink>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
