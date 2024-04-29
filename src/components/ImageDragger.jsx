"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useMouseContext } from "@/context/MouseMoveContext";
import { featuredImages } from "@/constants";
import { MdOutlineCancel } from "react-icons/md";

const ImageDragger = () => {
  const containerRef = useRef(null);
  const { values } = useMouseContext();
  const isInView = useInView(containerRef, { once: true });
  const [currentImageIndices, setCurrentImageIndices] = useState(
    featuredImages.map(() => 2)
  );

  let updatedIndices = [];
  const imagePositions = [
    { x: 50, y: 400 },
    { x: 270, y: 150 },
    { x: 350, y: 450 },
    { x: 600, y: 300 },
    { x: 800, y: 200 },
    { x: 850, y: 450 },
  ];

  const imageAnimations = {
    initial: (idx) => ({
      opacity: 0,
      x: imagePositions[idx].x,
      y: 2000,
      transition: { delay: 0.2, duration: 0.75 },
    }),
    enter: (idx) => ({
      opacity: 1,
      x: imagePositions[idx].x,
      y: imagePositions[idx].y,
      transition: {
        delay: 0.5 + idx * 0.3,
        duration: 0.75,
        ease: [0.61, 1, 0.88, 1],
      },
    }),
    remove: (idx) => ({
      opacity: 0,
      x: imagePositions[idx].x,
      y: -100,
      transition: { duration: 0.75, ease: [0.61, 1, 0.88, 1] },
    }),
  };

  const handleRemove = (setIndex) => {
    setCurrentImageIndices((prevIndices) => {
      updatedIndices = [...prevIndices];
      updatedIndices[setIndex] =
        (updatedIndices[setIndex] + 1) % featuredImages[setIndex].length;
      return updatedIndices;
    });
  };

  return (
    <div
      onMouseEnter={() => values.setHovered(true)}
      onMouseLeave={() => values.setHovered(false)}
      className="w-full container mx-auto relative   h-screen"
      ref={containerRef}
    >
      <div className="">
        {featuredImages.map((imageSet, setIndex) => (
          <div key={setIndex}>
            <motion.div
              key={setIndex}
              className=" bg-[#D8D8D8] p-4 outline-double cursor-grab outline-white/35 rounded-lg left-0 top-0 absolute "
              drag={setIndex === 1 ? "x" : true}
              variants={imageAnimations}
              custom={setIndex}
              dragTransition={{ bounceDamping: 100, bounceStiffness: 200 }}
              dragConstraints={containerRef}
              whileTap={{ cursor: "grabbing" }}
              initial="initial"
              animate={isInView ? "enter" : "initial"}
            >
              <MdOutlineCancel
                className="  cursor-pointer absolute top-[3px] right-[3px] "
                size={22}
                color="black"
                onClick={() => handleRemove(setIndex)}
              />
              <Image
                className="pointer-events-none rounded-md p-2 w-full h-full "
                src={imageSet[currentImageIndices[setIndex]].src} // Use the current index from state
                alt={imageSet[currentImageIndices[setIndex]].alt} // Use the current index from state
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDragger;
