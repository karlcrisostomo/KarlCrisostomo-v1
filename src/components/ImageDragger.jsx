"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMouseContext } from "@/context/MouseMoveContext";
import { featuredImages, projects } from "@/constants";
import { MdOutlineCancel } from "react-icons/md";
const ImageDragger = () => {
  const containeRef = useRef(null);
  const { values } = useMouseContext();
  const [isRemove, setRemove] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [hiddenIndices, setHiddenIndices] = useState([]);
  const isInView = useInView(containeRef, { once: true });

  const handleRemove = (idx) => {
    setRemove(true);
    setSelectedIdx(idx);

    if (hiddenIndices.includes(idx)) {
      setHiddenIndices(hiddenIndices.filter((i) => i !== idx));
    } else {
      setHiddenIndices([...hiddenIndices, idx]);
    }
  };

  const ImgPositions = [
    { x: 0, y: 300 },
    { x: 270, y: 200 },
    { x: 350, y: 450 },
    { x: 600, y: 300 },
    { x: 800, y: 200 },
    { x: 850, y: 450 },
  ];
  const animateImage = {
    initial: (idx) => ({
      opacity: 0,
      x: ImgPositions[idx].x,
      y: 2000,
      transition: {
        delay: 0.2,
        duration: 0.75,
      },
    }),

    enter: (idx) => ({
      opacity: 1,
      x: ImgPositions[idx].x,
      y: ImgPositions[idx].y,

      transition: {
        delay: 0.5 + idx * 0.3,
        duration: 0.75,
        ease: [0.61, 1, 0.88, 1],
      },
    }),

    remove: (idx) => ({
      display: "hidden",
      opacity: 0,
      x: ImgPositions[idx].x,
      y: -10,
      transistion: {
        delay: 0.25,
        duration: 0.75,
        ease: [0.61, 1, 0.88, 1],
      },
    }),
  };

  return (
    <div
      onMouseEnter={() => values.setHovered(true)}
      onMouseLeave={() => values.setHovered(false)}
      className="w-full container mx-auto relative   cursor-pointer   h-screen  "
      ref={containeRef}
    >
      <div className=" ">
        {featuredImages.map((item, idx) => (
          <motion.div
            key={idx}
            className=" bg-white   p-4 outline-double outline-white/35 rounded-sm  left-0 top-0 absolute     "
            drag={idx === 1 ? "x" : true}
            variants={animateImage}
            custom={idx}
            dragTransition={{ bounceDamping: 100, bounceStiffness: 200 }}
            dragConstraints={containeRef}
            whileTap={{ cursor: "grabbing" }}
            initial="initial"
            animate={
              hiddenIndices.includes(idx)
                ? "remove"
                : isInView
                ? "enter"
                : "initial"
            }
          >
            <MdOutlineCancel
              className=" absolute top-[3px] right-[3px] "
              size={22}
              color="black"
              onClick={() => handleRemove(idx)}
            />
            <Image
              className="pointer-events-none  rounded-md p-2  w-full h-full   "
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageDragger;
