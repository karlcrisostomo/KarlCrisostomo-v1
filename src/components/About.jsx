"use client";
import {
  aboutParagraphs,
  awards,
  experience,
  links,
  techStack,
} from "@/constants";
import React, { useState, useEffect, useRef } from "react";
import { MdArrowRight } from "react-icons/md";
import { motion, useInView, useSpring } from "framer-motion";
import { useMouseContext } from "@/context/MouseMoveContext";
import StyledSection from "./StyledSection";

const StyledContainer = ({ children, title }) => {
  return (
    <div className=" py-4">
      <span className=" text-sm  text-[#f2f2f280]">{title}</span>

      <div className=" text-nowrap pt-4">{children}</div>
    </div>
  );
};

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
      <StyledSection>
        <div
          className="   min-[0px]:flex-col flex     lg:flex-row justify-between  "
         
        >
          <div className="   xl:max-w-4xl ">
            {Object.values(aboutParagraphs).map((p, idx) => (
              <p
                className="  tracking-wider leading-relaxed py-6 text-2xl lg:text-4xl  lg:leading-snug"
                key={idx}
              >
                {p}
              </p>
            ))}
          </div>
          <div className=" flex-none lg:w-[300px] w-[400px]">
            <StyledContainer title={"experience"}>
              {experience.map((item, idx) => (
                <div key={idx} className="  font-medium">
                  <p>{item.company}</p>
                  <p>{item.date}</p>
                  <p>{item.position} </p>
                </div>
              ))}
            </StyledContainer>
            <StyledContainer title={"academic awards"}>
              {awards.map((item, idx) => (
                <div key={idx} className="  font-medium">
                  <p>{item.award}</p>
                </div>
              ))}
            </StyledContainer>

            <StyledContainer title={"technology stack"}>
              <ul className="    ">
                {techStack.map((item, idx) => (
                  <li className=" " key={idx}>
                    <p className=" text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </StyledContainer>
          </div>
        </div>
      </StyledSection>
    </div>
  );
};

export default About;
