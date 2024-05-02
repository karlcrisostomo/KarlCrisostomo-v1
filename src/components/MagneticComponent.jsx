"use client";

import { useRef, useState } from "react";
import { cubicBezier, motion } from "framer-motion";
import menuState from "@/utils/menuState";

export default function MagneticComponent({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className=" duration-300 ease-out z-0   "
      style={{ position: "relative", x, y }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      transition={{
        ease: "easeOut",
        delay: 0,
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      <div className=" bg-transparent w-full h-full absolute scale-[3] top-0 " />

      {children}
    </motion.div>
  );
}
