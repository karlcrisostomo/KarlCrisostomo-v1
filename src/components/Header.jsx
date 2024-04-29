"use client";

import { useMouseContext } from "@/context/MouseMoveContext";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import StyledSection from "./StyledSection";

const Header = () => {
  const intro = ` The Web—Where Creativity Becomes My Playground `;
  const { values } = useMouseContext();

  const animateHeader = {
    initial: {
      opacity: 0,
      y: 100,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        duration: 0.75,
      },
    },
  };

  return (
    <section className="  h-screen  relative  flex  flex-col justify-center items-center  tracking-wider text-center  ">
      <motion.div variants={animateHeader} initial="initial" animate="enter">
        <p
          onMouseEnter={() => {
            values.setHoveredSection();
          }}
          onMouseLeave={() => {
            values.setHoveredSection("");
          }}
          className="min-[0px]:text-4xl min-[0px]:tracking-tight md:text-6xl  lg:text-8xl xl:text-[5.5rem] lg:tracking-wider"
        >
          {intro}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.75,
            duration: 0.25,
            ease: [0.33, 1, 0.68, 1],
          },
        }}
        className="  flex justify-center pt-9 "
        onMouseEnter={() => values.setHovered(true)}
        onMouseLeave={() => values.setHovered(false)}
      >
        <a
          className=" cursor-pointer flex items-center  text-sm  w-fit  rounded-lg  p-4 hover:-translate-y-2 transition-all duration-200 border border-white/25 hover:bg-white/10 hover:border-white/45
               "
        >
          <p>Resume</p>
          <GoArrowUpRight size={22} />
        </a>
      </motion.div>

      <motion.div
        initial={{ top: 500, opacity: 0 }}
        animate={{
          top: 700,
          opacity: 1,
          transition: {
            delay: 0.75,
            duration: 0.75,
          },
        }}
        className=" absolute flex flex-col items-center justify-center   -right-16 pointer-events-none "
      >
        <motion.div
          initial={{
            width: "4px",
            height: "6px",
          }}
          animate={{
            opacity: 1,
            width: "3px",
            height: "60px",
            borderRadius: "0%",
            transition: {
              duration: 0.75,
              delay: 0.5,
              type: "spring",
              ease: "easeOut",
            },
          }}
          className=" bg-white   "
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.75,
              duration: 0.75,
            },
          }}
          className="  -translate-y-1   "
        >
          <span className=" w-[12px] h-[2px] block rotate-45  -translate-x-[4px] translate-y-[1px]   bg-white" />
          <span className=" w-[12px] h-[2px] block   -rotate-45  translate-x-[4px] -translate-y-[1px]      bg-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
