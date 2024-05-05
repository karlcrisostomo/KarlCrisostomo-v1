"use client";
import { footerLinks, links } from "@/constants";
import { TbArrowNarrowRight } from "react-icons/tb";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [onHover, setHover] = useState(null);
  const [footerHover, setFooterHover] = useState(null);
  const handleItemHover = (i) => {
    setHover(i);
  };

  const handleFooterItemsHover = (i) => {
    setFooterHover(i);
  };

  const handleEmailClick = (link) => {
    window.location.href = `mailto:${link}`;
  };
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

  const styledLinks = {
    initial: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: [0.61, 1, 0.88, 1],
      },
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.61, 1, 0.88, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  };
  const smoothScroll = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    if (target) {
      const targetEl = document.querySelector(target);

      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className=" pt-32 px-14 overflow-hidden ">
      <ul className="text-black max-md:items-center   w-full text-4xl  flex flex-col   gap-6">
        {links.map((item, idx) => (
          <motion.li
            className=" border-b w-full  text-center border-gray-400 pb-2 md:border-none    md:text-start "
            variants={perspective}
            animate="enter"
            exit="exit"
            initial="initial"
            custom={idx}
            key={idx}
          >
            <Link onClick={smoothScroll} href={item.id}>
              <motion.div
                className=" relative max-md:w-full w-fit "
                onMouseEnter={() => handleItemHover(idx)}
                onMouseLeave={() => handleItemHover(null)}
              >
                <motion.span
                  className=" absolute flex items-center"
                  variants={styledLinks}
                  animate={
                    onHover !== null && onHover === idx ? "enter" : "exit"
                  }
                  exit="exit"
                  initial="initial"
                >
                  <TbArrowNarrowRight />
                </motion.span>

                <motion.div
                  animate={{ x: onHover === idx ? 50 : 0 }}
                  className={`${onHover === idx ? "font-bold" : "font-normal"}`}
                >
                  {item.title}
                </motion.div>
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className=" py-20">
        <ul className=" text-black flex-wrap flex   ">
          {footerLinks.map((item, idx) => (
            <motion.li
              custom={idx}
              variants={slideIn}
              animate="enter"
              initial="initial"
              exit="exit"
              className=" w-[50%] mt-2  "
              key={idx}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={idx === 3 ? `mailto:${item.link}` : item.link}
                className=" cursor-pointer flex items-center w-fit  "
                onMouseEnter={() => handleFooterItemsHover(idx)}
                onMouseLeave={() => handleFooterItemsHover(null)}
              >
                <motion.span
                  className=" absolute flex items-center pointer-events-none "
                  variants={styledLinks}
                  animate={
                    footerHover !== null && footerHover === idx
                      ? "enter"
                      : "exit"
                  }
                  exit="exit"
                  initial="initial"
                >
                  <IoMdArrowDropright size={22} />
                </motion.span>

                <motion.span
                  animate={{ x: footerHover === idx ? 20 : 0 }}
                  className={`  transition-all duration-75 ease-linear ${
                    footerHover === idx ? " font-bold" : "font-normal"
                  }`}
                >
                  {item.title}
                </motion.span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
