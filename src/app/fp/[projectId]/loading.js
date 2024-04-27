"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = ({ setLoading }) => {
  const loaderText = "Loading...";

  const loadingAnim = {
    initial: (i) => ({
      y: -5,
    }),

    enter: (i) => ({
      opacity: 1,
      y: [-5, 4, -5],
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.25,
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "reverse",
        ease: [0.55, 1, 0.68, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 0.2,
      },
    },
  };

  const container = {
    initial: {
      transition: {
        delay: 0.2,
        duration: 2.25,
      },
    },
    enter: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.75,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        duration: 0.75 ,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="enter"
      exit="exit"
      className=" z-[9999]   pointer-events-none  w-full font-light top-0 left-0 bg-black  absolute  flex justify-center items-center h-full   "
    >
      {loaderText.split("").map((char, idx) => (
        <motion.p
          variants={loadingAnim}
          initial="initial"
          animate="enter"
          exit="exit"
          className="  text-base px-1"
          key={idx}
          custom={idx}
        >
          {char}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default Loading;
