"use client";
import { useEffect } from "react";
import { useAnimate, motion } from "framer-motion";
import { useMouseContext } from "@/context/MouseMoveContext";

const CustomCursor = () => {
  const { values } = useMouseContext();

  const cursorSize = values.hoveredSection !== "" ? 300 : 40;

  useEffect(() => {
    if (values.hoveredSection !== "") {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
 
  }, [values.hoveredSection]);

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
      initial="initial"
      animate={values?.isHovered ? "enter" : "exit"}
      exit="exit"
      style={{
        x: values?.mousePosition.x - cursorSize / 2,
        y: values?.mousePosition.y - cursorSize / 2,
      }}
      className={`z-50 transition-all duration-300 ease-out fixed left-0 top-0 pointer-events-none rounded-full mix-blend-difference 
      ${values.hoveredSection !== "" && "bg-white duration-200 transition-all"}
     `}
    >
      <div className="flex flex-col justify-center items-center h-full italic opacity-85 text-lg font-black uppercase text-black">
        {values.hoveredSection && <p>{values.hoveredSection}</p>}
      </div>
    </motion.div>
  );
};

export default CustomCursor;
