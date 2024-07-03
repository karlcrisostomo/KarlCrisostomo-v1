"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const ParallaxContainer = ({ img, alt, itemNumber, title, idx }) => {
  const container = useRef(null);
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsAnimationEnabled(window.innerWidth > 1279);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    isAnimationEnabled ? ["-30%", "30%"] : [0, 0]
  );

  return (
    <div
      className="relative gap-4 min-[0px]:h-full xl:h-[500px] text-2xl  md:text-3xl cursor-pointer overflow-hidden  max-lg:flex-col-reverse  flex flex-col justify-center"
      ref={container}
    >
      <div className=" xl:absolute pointer-events-none w-full h-full  lg:p-6 font-bold z-20 top-0 left-0text-white xl:text-gray-900">
        <div className="flex justify-between items-center py-4">
          <span className="h-full font-bold">({title})</span>

          <div className="flex items-center gap-2">
            <h1>{itemNumber}</h1>
            <span className="w-8 h-8 block bg-red-500 rounded-full" />
          </div>
        </div>
      </div>

      <motion.div className="w-full z-0" style={{ y: translateY }}>
        <Image
          className={`object-cover  ${
            idx === 2 && " invert grayscale"
          } object-center transition-all duration-300`}
          src={img}
          alt={alt}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxContainer;
