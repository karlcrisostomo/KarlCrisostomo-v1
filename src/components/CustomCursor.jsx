"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMouseContext } from "@/context/MouseMoveContext";
import styled from "styled-components";

const CustomCursor = () => {
  const { values } = useMouseContext();
  const isHovered = values.hoveredSection !== "";
  const cursorSize = isHovered ? 300 : 40;
  useEffect(() => {
    if (isHovered) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [isHovered]);

  const animateMenu = {
    enter: {
      width: "0px",
      height: "0px",
      border: "0px",
      transition: {
        duration: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      border: "1px solid white",
      width: cursorSize,
      height: cursorSize,

      transition: {
        duration: 0,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    initial: {
      border: "1px solid white",
      width: cursorSize,
      height: cursorSize,

      transition: {
        duration: 0,
        ease: [0.22, 1, 0.36, 1],
      },
    },  
  };

  return (
    <motion.div
      variants={animateMenu}
      animate={values.isMenuHovered ? "enter" : "exit"}
      exit="exit"
      initial="initial"
      style={{
        x: values.mousePosition.x - cursorSize / 2,
        y: values.mousePosition.y - cursorSize / 2,
      }}
      className={` transition-all duration-300  ease-out fixed  left-0 top-0 pointer-events-none rounded-full mix-blend-difference 
      ${isHovered && "bg-white duration-200 transition-all"}
     `}
    >
      <div className="flex flex-col justify-center items-center  h-full  text-lg font-black text-black">
        {isHovered && <p>{values.hoveredSection}</p>}
      </div>
    </motion.div>
  );
};

export default CustomCursor;
