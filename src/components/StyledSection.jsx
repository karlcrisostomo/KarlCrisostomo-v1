"use client";

import { useMouseContext } from "@/context/MouseMoveContext";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const StyledSection = ({ children, section }) => {
  const sectionTitle = section.toUpperCase();

  const { values } = useMouseContext();
  const el = useRef(null);

  const { scrollYProgress } = useScroll({
    target: el,
    offset: ["start end", "start start"],
  });

  return (
    <motion.div className=" " ref={el} style={{ opacity: scrollYProgress }}>
      <div
        onMouseEnter={() => values.setHoveredSection(sectionTitle)}
        onMouseLeave={() => values.setHoveredSection("")}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default StyledSection;
