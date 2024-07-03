"use client";

import { useMouseContext } from "@/context/MouseMoveContext";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  const resume = "/Resume.pdf";

  const handleOpenResume = () => {
    window.open(resume, "_blank");
  };
  const title = [
    " The Web—Where Creativity ",
    " Becomes My Playground ",
  ];
  const { values } = useMouseContext();

  const animateHeader = {
    initial: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.25,
        ease: [0.55, 1, 0.68, 1],
      },
    },
    enter: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + idx * 0.1,
        duration: 0.75,
      },
    }),
  };

  return (
    <section className="  h-screen  relative  flex  max-sm:justify-start  flex-col justify-center items-center  tracking-wider text-center  ">
      <motion.div>
        {title.map((text, idx) => (
          <div className={` overflow-hidden  ${idx === 1 && "pb-2"}`} key={idx}>
            <motion.p
              custom={idx}
              variants={animateHeader}
              initial="initial"
              animate="enter"
              onMouseEnter={() => {
                values.setHoveredSection();
              }}
              onMouseLeave={() => {
                values.setHoveredSection("");
              }}
              className="max-sm:text-[2.7rem] max-sm:tracking-tight sm:text-5xl md:text-[3.5rem] lg:text-[4.2rem] xl:text-[5.5rem] 2xl:text-[5.7] sm:text-nowrap  lg:tracking-wider "  
            >
              {text}
            </motion.p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.75,
            duration: 0.25,
            ease: [0.33, 1, 0.68, 1],
          },
        }}
        className="  flex justify-center mt-9"
        onMouseEnter={() => values.setHovered(true)}
        onMouseLeave={() => values.setHovered(false)}
      >
        <div
          onClick={handleOpenResume}
          className=" cursor-pointer flex items-center group text-sm  w-fit  rounded-lg  p-4 hover:-translate-y-2 transition-all duration-200 border border-white/25 hover:bg-white/10 hover:border-white/45
               "
        >
          <p className=" group-hover:font-bold">Resume</p>
          <span className="  group-hover:-translate-y-1 group-hover:translate-x-1 translate-x-0 duration-300">
            <GoArrowUpRight size={22} />
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ top: "50vh", opacity: 0 }}
        animate={{
          top: "60vh",
          opacity: 1,
          transition: {
            delay: 0.75,
            duration: 0.75,
          },
        }}
        className=" absolute flex flex-col items-center justify-center max-lg:right-0  -right-16 pointer-events-none animate-bounce  "
      >
        <motion.div
          initial={{
            width: "4px",
            height: "6px",
          }}
          animate={{
            opacity: 1,
            width: "3px",
            height: "60px",
            borderRadius: "0%",
            transition: {
              duration: 0.75,
              delay: 0.5,
              type: "spring",
              ease: "easeOut",
            },
          }}
          className=" bg-white  "
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.75,
              duration: 0.75,
            },
          }}
          className="  -translate-y-1    "
        >
          <span className=" w-[12px] h-[2px] block rotate-45  -translate-x-[4px] translate-y-[1px]  bg-white" />
          <span className=" w-[12px] h-[2px] block  -rotate-45  translate-x-[4px] -translate-y-[1px]     bg-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
