"use client";
import { aboutParagraphs, awards, experience, tools } from "@/constants";
import React, { useState, useEffect, useRef } from "react";

import { motion, useInView } from "framer-motion";
import { useMouseContext } from "@/context/MouseMoveContext";
import StyledSection from "./StyledSection";
import { ImageDragger } from ".";

const About = () => {
  const containerRef = useRef();

  const spanRef = useRef(null);
  const { values } = useMouseContext();
  const isInFeaturedView = useInView(spanRef, { once: true });

  const animateSpan = {
    initial: {
      width: "0px",
      height: "3px",
    },
    enter: {
      width: "150px",
      height: "3px",

      transition: {
        delay: 0.75,
        duration: 0.75,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  };
  return (
    <div id="about">
      <StyledSection>
        <div
          className=" min-[0px]:flex-col flex pb-32 pt-28   lg:flex-row justify-between  "
          onMouseEnter={() => values.setHoveredSection("about")}
          onMouseLeave={() => values.setHoveredSection("")}
        >
          <div className=" lg:max-w-xl   xl:max-w-3xl 2xl:max-w-4xl ">
            {Object.values(aboutParagraphs).map((p, idx) => (
              <p
                className=" tracking-wider leading-relaxed py-6 text-2xl lg:text-3xl xl:text-[2rem]  lg:leading-snug"
                key={idx}
              >
                {p}
              </p>
            ))}
          </div>
          <div className=" min-[0px]:w-0  lg:w-[300px] w-[400px]">
            <StyledContainer title="experience">
              {experience.map((item, idx) => (
                <div key={idx} className="  font-medium">
                  <p>{item.company}</p>
                  <p>{item.date}</p>
                  <p>{item.position} </p>
                </div>
              ))}
            </StyledContainer>
            <StyledContainer title="academic awards">
              {awards.map((item, idx) => (
                <div key={idx} className="  font-medium">
                  <p>{item.award}</p>
                </div>
              ))}
            </StyledContainer>

            <StyledContainer title="tools">
              <ul className="    ">
                {tools.map((item, idx) => (
                  <li className=" " key={idx}>
                    <p className=" text-sm xl:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </StyledContainer>
          </div>
        </div>
      </StyledSection>

      <StyledSection>
        <div
          className=" py-28 flex flex-col cursor-auto    "
          onMouseEnter={() => values.setHovered(true)}
          onMouseLeave={() => values.setHovered(false)}
        >
          <p className=" min-[200px]:text-4xl text-7xl flex flex-col items-center pb-28 justify-center uppercase font-normal ">
            {" "}
            <span className=" min-[200px]:text-5xl md:text-7xl  lg:text-8xl xl:text-[6rem]  italic font-extralight">
              featured{" "}
            </span>{" "}
            photos{" "}
          </p>

          <span className=" uppercase text-sm flex justify-end py-4  ">
            <p className="   w-52 ">
              Drag the Elements around to customize the layout{" "}
              <motion.span
                ref={spanRef}
                className=" bg-white block mt-2"
                variants={animateSpan}
                initial="initial"
                animate={isInFeaturedView ? "enter" : "initial"}
              />
            </p>
          </span>
          <div className="" ref={containerRef}>
            <ImageDragger containerRef={containerRef} />
          </div>
        </div>
      </StyledSection>
    </div>
  );
};

const StyledContainer = ({ children, title }) => {
  return (
    <div className=" py-4">
      <span className=" text-sm xl:text-base  text-[#f2f2f280]">{title}</span>

      <div className=" text-nowrap pt-4">{children}</div>
    </div>
  );
};

const Countdown = () => {
  const arr = [3, 2, 5, 4, 0, 6, 8, 1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
export default About;
