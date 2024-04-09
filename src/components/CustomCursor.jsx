"use client";
import {  } from "react";
import { motion } from "framer-motion";
import { useMouseContext } from "@/context/MouseMoveContext";

const CustomCursor = () => {
  const { values } = useMouseContext();
  const isHovered = values.hoveredSection !== "";

  return (
    <motion.div
      style={{
        x: isHovered ? values.mousePosition.x - 60 : values.mousePosition.x - 20,
        y: isHovered ? values.mousePosition.y - 60 : values.mousePosition.y - 20,
      }}
      className={` border border-white transition-all duration-300 ease-out fixed pointer-events-none rounded-full mix-blend-difference ${isHovered ? "w-32 h-32 bg-white " : "w-10 h-10"}`}
    >
      <div className="flex flex-col justify-center items-center  h-full  text-lg font-black text-black">
        {isHovered && <p>{values.hoveredSection}</p>}
      </div>
    </motion.div>
  );
};

export default CustomCursor;