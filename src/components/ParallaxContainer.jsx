"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const ParallaxContainer = ({ img, alt, itemNumber, title }) => {
  const container = useRef(null);
  const router = useRouter();

  const handleNavigation = (id) => {
    router.push(`/fp/${id}`);
  };
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const content = useTransform(scrollYProgress, [0, 1], ["20%", "50%"]);

  return (
    <div
      className="relative gap-20  h-[500px]  text-4xl    overflow-hidden   flex  flex-col justify-center       "
      ref={container}
    >
      <div
        className=" absolute  w-full h-full cursor-pointer text-gray-900 p-6 font-bold  z-20  top-0 left-0"
        onClick={() => handleNavigation(itemNumber)}
      >
        <div>
          <div className=" flex items-center gap-2 justify-end">
            {itemNumber}
            <span className=" w-8 h-8 block bg-red-500 rounded-full" />{" "}
          </div>
        </div>
      </div>
      <motion.div className=" w-full z-10  " style={{ y: translateY }}>
        <Image
          className="   object-cover    transition-all duration-300 "
          src={img}
          alt={alt}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxContainer;
