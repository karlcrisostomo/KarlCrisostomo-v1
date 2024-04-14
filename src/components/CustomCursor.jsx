"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMouseContext } from "@/context/MouseMoveContext";
import styled from "styled-components";

const CustomCursor = () => {
  const { values } = useMouseContext();
  const isHovered = values.hoveredSection !== "";

  useEffect(() => {
    if (isHovered) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [isHovered]);

  return (
    <motion.div
      style={{
        x: isHovered
          ? values.mousePosition.x - 150
          : values.mousePosition.x - 33,
        y: isHovered
          ? values.mousePosition.y - 150
          : values.mousePosition.y - 30,
      }}
      className={`border border-white transition-all duration-300 ease-out fixed pointer-events-none rounded-full mix-blend-difference ${
        isHovered ? "w-64 h-64 bg-white  " : "w-10 h-10"
      }`}
    >
      <div className="flex flex-col justify-center items-center  h-full  text-lg font-black text-black">
        {isHovered && <p>{values.hoveredSection}</p>}
      </div>
    </motion.div>
  );
};

export default CustomCursor;
