"use client";

import { motion, AnimatePresence } from "framer-motion";
import StyledSection from "./StyledSection";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useMouseContext } from "@/context/MouseMoveContext";
const Contact = () => {
  const title = ["get", "in", "touch"];
  const emailAddress = "karlcrisostomo.dev@gmail.com";
  const [showNotification, setShowNotification] = useState(false);
  const { values } = useMouseContext();
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Failed to copy email address: ", error);
      });
  };
  return (
    <StyledSection section=" ">
      <motion.div
        id="contact"
        className=" h-screen flex flex-col justify-center items-center"
      >
        <span className=" text-center text-6xl  sm:text-[6rem] md:text-[7rem] lg:text-[9rem]  uppercase ">
          {title.map((text, idx) => (
            <p className={`  ${idx === 1 && "italic"}`} key={idx}>
              {text}
            </p>
          ))}
        </span>

        <span
          onMouseEnter={() => values.setHovered(true)}
          onMouseLeave={() => values.setHovered(false)}
          className=" font-bold pb-4 cursor-pointer mt-20 "
          onClick={copyToClipboard}
        >
          <p className=" md:text-base lg:text-lg xl:text-xl">{emailAddress}</p>
        </span>
        {showNotification && <IslandNotification />}
      </motion.div>
    </StyledSection>
  );
};

export default Contact;

export const IslandNotification = () => {
  const notifAnimation = {
    initial: { opacity: 0, width: "3px", height: "40px" },
    enter: {
      opacity: 1,
      width: "fit-content",
      height: "40px",
      padding: "0 10px 0 10px",
      transition: { duration: 0.75, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      width: "3px",
      height: "40px",
      transition: { delay: 0.25, duration: 0.75 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="notification"
        variants={notifAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" fixed top-[50px] text-white overflow-hidden border-2 flex flex-col justify-center rounded-full bg-black "
      >
        <motion.span
          className=" flex items-center gap-2 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.75, duration: 0.75 } }}
        >
          Copied to Clipboard{" "}
          <span>
            <IoIosCheckmarkCircle color="lime" />
          </span>
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
};
