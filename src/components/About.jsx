"use client";
import { aboutParagraphs, experiece, techStack } from "@/constants";

import React, { useState, useEffect, useRef } from "react";
import { MdArrowRight } from "react-icons/md";
import { motion, useInView, useSpring } from "framer-motion";
import { useMouseContext } from "@/context/MouseMoveContext";
import { styled } from "styled-components";

const StyledExperienceContainer = styled.div.attrs({
  className: " py-[2em]",
})``;
// padding: 1em 0 1em 0;

const Countdown = () => {
  const arr = [3, 2, 5, 4, 0, 6, 8, 1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const ref = useRef(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && currentIndex < arr.length - 1 && !animationComplete) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (currentIndex === arr.length - 1) {
      setAnimationComplete(true);
    }
  }, [currentIndex, animationComplete, isInView]);

  return (
    <motion.div
      ref={ref}
      className="  h-[500px] flex flex-col justify-center items-center "
      animate={{ y: [0, -20, 20, -20, 0] }}
      onAnimationComplete={() => {
        if (arr[currentIndex] === 0) {
          setAnimationComplete(true);
        }
      }}
    >
      <div className="  text-center">
        <h1 className=" text-4xl">with</h1>
        <p className=" text-8xl font-bold tracking-wide ">
          {arr[currentIndex]} <span className=" text-2xl">yr.</span> Experience{" "}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { values } = useMouseContext();
  return (
    <div
      onMouseEnter={() => values.setHoveredSection("About")}
      onMouseLeave={() => values.setHoveredSection("")}
    >
      <div className=" min-[0px]:flex-col flex  lg:flex-row justify-between gap-10 ">
        <div>
          {Object.values(aboutParagraphs).map((p, idx) => (
            <p
              className=" tracking-wider leading-relaxed py-2  text-2xl lg:text-3xl  lg:leading-snug"
              key={idx}
            >
              {p}
            </p>
          ))}
        </div>
        <div className=" w-full">
          <StyledExperienceContainer>
            <span className=" text-gray-300 font-light sm:text-base">
              Experience
            </span>

            {experiece.map((item, idx) => (
              <div key={idx} className="  font-medium">
                <p>{item.company}</p>
                <p>{item.date}</p>
                <p>{item.position} </p>
              </div>
            ))}
          </StyledExperienceContainer>

          <div>
            <span className="text-gray-300 font-light sm:text-base">
              Technology Stack
            </span>

            <ul className="    ">
              {techStack.map((item, idx) => (
                <li className=" " key={idx}>
                  <div className=" flex items-center ">
                    <MdArrowRight size={20} />
                    <p className=" text-sm">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
