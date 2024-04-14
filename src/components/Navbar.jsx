"use client";

import { contact } from "@/constants";
import { useMouseContext } from "@/context/MouseMoveContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, delay, motion } from "framer-motion";
import { MenuButton, Nav } from ".";
import menuState from "@/utils/menuState";
const Logo = () => {
  return (
    <div className=" w-full ">
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
  const [setBg, setBgChange] = useState(false);
  const { values } = useMouseContext();
  const { isMobile, setMobile, setActive, isActive } = menuState();
 
  const toggleMenu = () => setActive((prevState) => !prevState);

  const variants = {
    open: {
      width: "450px",
      height: "550px",
      borderRadius: "20px",
      top: "-20px",
      right: "-20px",

      transition: {
        duration: 0.7,
        delay: 0.2,
        type: "tween",
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

  useEffect(() => {
    const handleScrollNav = () => {
      setBgChange(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  return (
    <nav>
      <div
        className={twMerge(
          " fixed z-50  w-full top-0 right-0 flex justify-end  md:top-[50px] md:right-[50px] md:w-auto md:h-auto "
        )}
      >
        {isActive && (
          <div className=" bg-white/10  backdrop-blur-[3px]   fixed w-full h-full top-0 left-0" />
        )}

        <motion.div
          ref={values.menuRef}
          className=" bg-[#f5f7fa] relative   "
          variants={variants}
          animate={isActive ? (isMobile ? "breakpoint" : "open") : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <MenuButton toggleMenu={toggleMenu} isActive={isActive} />
      </div>
    </nav>
  );
};

export default Navbar;
