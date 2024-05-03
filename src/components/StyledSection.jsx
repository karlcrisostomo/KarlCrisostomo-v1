"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const StyledSection = ({ children, section }) => {
  const el = useRef(null);

  const { scrollYProgress } = useScroll({
    target: el,
    offset: ["start end", "start start"],
  });

  return (
    <motion.div ref={el} style={{ opacity: scrollYProgress }}>
      <div>{children}</div>
    </motion.div>
  );
};

export default StyledSection;
