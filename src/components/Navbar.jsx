"use client";

import { contact } from "@/constants";
import { useMouseContext } from "@/context/MouseMoveContext";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, delay, motion } from "framer-motion";
import { MagneticComponent, MenuButton, Nav } from ".";
import menuState from "@/utils/menuState";

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
    <nav className=" h-32    ">
      <div
        onMouseEnter={() => values.setHovered(true)}
        onMouseLeave={() => values.setHovered(false)}
        className={twMerge(
          " fixed z-50 w-full  top-0 right-0 flex justify-end  md:top-[50px] md:right-[50px] min-[1920px]:top-[100px]  min-[1920px]:right-[100px] md:w-auto md:h-auto "
        )}
      >
        <Logo />
        <motion.div
          ref={menuRef}
          className=" bg-[#f5f7fa]   cursor-pointer relative shadow-md   "
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

      {isActive && (
        <div className=" max-md:backdrop-blur-sm backdrop-blur-[1.5px] w-full  fixed z-40 top-0 left-0 h-full" />
      )}
    </nav>
  );
};

export default Navbar;

const Logo = () => {
  const [isHover, setHover] = useState(false);

  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleReload}
      className="fixed hidden md:block cursor-pointer transition-all duration-300 top-0 left-0 md:left-[50px] md:top-[50px] min-[1920px]:top-[100px] min-[1920px]:left-[100px]"
    >
      <MagneticComponent>
        <div className="relative flex">
          {isHover && (
            <span className=" bg-white blur-sm rounded-full w-full h-full absolute top-0 z-10" />
          )}

          <Image
            className={`z-20 ${isHover && "rotate-[360deg] transition-all duration-500  delay-200" }`}
            src="/logo.svg"
            width={40}
            height={80}
            alt="logo"
          />
        </div>
      </MagneticComponent>
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
