"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

const StyledSection = ({ children }) => {
  const el = useRef(null);

  const { scrollYProgress } = useScroll({
    target: el,
    offset: ["start end", "start start"],
  });

  return (
    <motion.div
      className=" h-screen   flex flex-col justify-center   mix-blend-difference  "
      ref={el}
      style={{ opacity: scrollYProgress }}
    >
      {children}
    </motion.div>
  );
};

export default StyledSection;
