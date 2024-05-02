"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import Image from "next/image";
import { useMouseContext } from "@/context/MouseMoveContext";
import { featuredImages } from "@/constants";
import { MdOutlineCancel } from "react-icons/md";

const ImageDragger = ({ containerRef }) => {
  const { values } = useMouseContext();
  const imgObserver = useRef(null);
  const isInView = useInView(imgObserver, { once: true });
  const [imagePosition, setPosition] = useState([]);
  const [currentImageIndices, setCurrentImageIndices] = useState(
    featuredImages.map(() => 0)
  );

  const imagePositions = [
    { top: "15vh", left: "" },
    { top: "10vh", left: "15vw" },
    { top: "30vh", left: "25vw" },
    { top: "15vh", left: "35vw" },
    { top: "40vh", left: "60vw" },
    { top: "60vh", left: "10vw" },
  ];

  useEffect(() => {});
  const imageAnimations = {
    initial: (idx) => ({
      opacity: 0,
      left: imagePositions[idx]?.left,
      top: "50vh",
      transition: { delay: 0.2, duration: 0.75 },
    }),
    enter: (idx) => ({
      opacity: 1,
      left: imagePositions[idx]?.left,
      top: imagePositions[idx]?.top,

      transition: {
        delay: 0.5 + idx * 0.3,
        duration: 0.75,
        ease: [0.61, 1, 0.88, 1],
      },
    }),
    remove: (idx) => ({
      opacity: 0,
      left: imagePositions[idx]?.left,
      top: "-100px",
      transition: { duration: 0.75, ease: [0.61, 1, 0.88, 1] },
    }),
  };

  const handleRemove = (idx) => {
    setCurrentImageIndices((prevIndices) => {
      const updatedIndices = [...prevIndices];
      updatedIndices[idx] =
        (updatedIndices[idx] + 1) % featuredImages[idx].length;
      return updatedIndices;
    });
  };

  return (
    <div
      className="w-full  mx-auto  relative   h-screen       "
      ref={imgObserver}
    >
      <ul>
        {featuredImages.map((item, idx) => (
          <motion.li
            key={idx}
            className=" bg-[#D8D8D8]   min-[200px]:p-0    absolute top-0 left-0   w-fit  h-fit lg:p-4 outline-double cursor-grab outline-white/35 rounded-lg   "
            drag={idx === 1 || idx === 3 ? "x" : true}
            variants={imageAnimations}
            custom={idx}
            dragMomentum={true}
            dragConstraints={imgObserver}
            whileTap={{ cursor: "grabbing" }}
            initial="initial"
            animate={isInView ? "enter" : "initial"}
          >
            <span>{item[currentImageIndices[idx]]?.title}</span>
            <MdOutlineCancel
              className="  cursor-pointer absolute  top-[3px] right-[3px] "
              size={22}
              color="black"
              onClick={() => handleRemove(idx)}
            />
            <Image
              className="pointer-events-none min-[200px]:w-[270px] lg:w-[370px]  xl:w-[400px]   rounded-full lg:rounded-md p-2  "
              src={item[currentImageIndices[idx]].src}
              alt={item[currentImageIndices[idx]].alt}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ImageDragger;
