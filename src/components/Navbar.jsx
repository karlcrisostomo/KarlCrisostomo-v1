"use client";

import { contact } from "@/constants";
import { useMouseContext } from "@/context/MouseMoveContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, delay, motion } from "framer-motion";
import { MenuButton, Nav } from ".";
import menuState from "@/utils/menuState";
const Logo = () => {
  return (
    <div className=" fixed hidden md:block cursor-pointer hover:scale-110  hover:rotate-[360deg]  transition-all duration-300   top-0 left-0 md:left-[50px] md:top-[50px]  ">
      <Image src="/logo.svg" width={40} height={80} alt="logo" />
    </div>
  );
};

const Email = ({ flag }) => {
  const email = "karlcrisostomo.dev@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={flag ? "" : " text-end w-full"}>
      <button onClick={handleEmailClick}>{flag ? "EMAIL" : `${email}`}</button>
    </div>
  );
};

const Navbar = () => {
  const { values } = useMouseContext();
  const { isMobile, setMobile, setActive, isActive } = menuState();
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setActive((prevState) => !prevState);
  };

  const variants = {
    open: {
      width: "450px",
      height: "550px",
      borderRadius: "20px",
      top: "-20px",
      right: "-20px",

      transition: {
        duration: 0.75,

        ease: [0.33, 1, 0.68, 1],
      },
    },
    closed: {
      width: "100px",
      height: "40px",
      borderRadius: isMobile ? "0px" : "40px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.7,

        delay: 0.5,
        ease: [0.5, 1, 0.68, 1],
      },
    },

    breakpoint: {
      width: "100%",
      height: "100%",
      top: "0px",
      right: "0px",
      borderRadius: "0",
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  useEffect(() => {
    const handleClickedOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    window.addEventListener("click", handleClickedOutside);
    return () => {
      window.removeEventListener("click", handleClickedOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setMobile(true);
      else setMobile(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className=" h-32 ">
      <div
        onMouseEnter={() => values.setHovered(true)}
        onMouseLeave={() => values.setHovered(false)}
        className={twMerge(
          " fixed z-50 w-full   top-0 right-0 flex justify-end  md:top-[50px] md:right-[50px] md:w-auto md:h-auto "
        )}
      >
        <Logo />
        <motion.div
          ref={menuRef}
          className=" bg-[#f5f7fa] relative shadow-md   "
          variants={variants}
          animate={isActive ? (isMobile ? "breakpoint" : "open") : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && <Nav setActive={setActive} />}
          </AnimatePresence>
        </motion.div>
        <MenuButton toggleMenu={toggleMenu} isActive={isActive} />
      </div>

      {isActive && <div className=" w-full  fixed z-40 top-0 left-0 h-full" />}
    </nav>
  );
};

export default Navbar;
