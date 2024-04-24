"use client";
import React from "react";
import { motion } from "framer-motion";

const MenuButton = ({ isActive, toggleMenu, isMobile }) => {
  return (
    <button
      onClick={(e) => toggleMenu(e)}
      className={` absolute top-0 right-0  w-[100px] h-[40px]  text-black  overflow-hidden    md:rounded-full`}
    >
      <motion.div
        className=" relative w-full h-full  font-bold uppercase   "
        animate={{ top: isActive ? "-100%" : "0" }}
      >
        <p className=" w-full h-full flex justify-center items-center  ">
          Menu
        </p>
        <p className=" w-full h-full flex justify-center items-center  text-white bg-black">
          Close
        </p>
      </motion.div>
    </button>
  );
};

export default MenuButton;
