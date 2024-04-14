"use client";
import { footerLinks, links } from "@/constants";
import { delay, motion } from "framer-motion";
import styled from "styled-components";
const StyledBody = styled.ul.attrs({
  className:
    "text-black max-md:items-center    text-4xl cursor-pointer  flex flex-col gap-6",
})``;

const Nav = ({ isActive }) => {
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      transition: {
        duration: 0.25,
        ease: [0.55, 1, 0.68, 1],
      },
    },

    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.75,
        delay: 0.5 + i * 0.1,
        ease: [0.55, 1, 0.68, 1],
      },
    }),

    exit: {
      opacity: 0,
      rotateX: -90,
      transition: {
        duration: 0.75,
        ease: [0.55, 1, 0.68, 1],
      },
    },
  };

  const slideIn = {
    initial: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.25,
        ease: [0.55, 1, 0.68, 1],
      },
    },

    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.25,
        ease: [0.55, 1, 0.68, 1],
      },
    }),

    exit: {
      opacity: 0,
      y: 50,
      transition: {
        delay: 0.1,
        duration: 0.25,
        ease: [0.55, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className=" pt-32 px-14">
      <StyledBody>
        {links.map((item, idx) => (
          <motion.li
            className=" border-b w-full  text-center border-gray-400 pb-2 md:border-none  md:text-start"
            variants={perspective}
            animate="enter"
            exit="exit"
            initial="initial"
            custom={idx}
            key={idx}
          >
            {item.title}
          </motion.li>
        ))}
      </StyledBody>

      <div className=" py-20">
        <ul className=" text-black   flex-wrap flex ">
          {footerLinks.map((item, idx) => (
            <motion.li
              custom={idx}
              variants={slideIn}
              animate="enter"
              initial="initial"
              exit="exit"
              className="  w-[50%] mt-2"
              key={idx}
            >
              <a
                href="
                
              "
              >
                {" "}
                {item.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
