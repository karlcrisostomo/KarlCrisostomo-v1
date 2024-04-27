"use client";

import { projects } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"; // Import Suspense

import { GoArrowUpRight } from "react-icons/go";
import { IoCodeOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";

import { AnimatePresence, motion } from "framer-motion";

import Loading from "./loading";
import { useMouseContext } from "@/context/MouseMoveContext";

const LinkButton = ({ children, link, title }) => {
  return (
    <>
      <a
        title={title}
        className=" h-fit transition-all duration-600  hover:bg-[#434343]  p-1 rounded-sm  "
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {children}
      </a>
    </>
  );
};

const Page = ({ params }) => {
  const project = projects.find((proj) => proj.title === params.projectId);
  const { title, image, alt, description, techStack, link, demo } = project;
  const { values } = useMouseContext();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      setLoading(true);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div key="loader">
          <Loading setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className="p-4   ">
          <div className="container mx-auto">
            <RouteBackComponent />
            <span>
              <h1 className="py-10 text-3xl lg:text-5xl">{title}</h1>
            </span>
          </div>
          <div className="flex flex-col gap-10">
            <Image
              className="lg:w-full lg:h-[800px] lg:object-top lg:object-cover"
              src={image}
              alt={alt}
            />

            <div className="flex-col container mx-auto flex lg:flex-row justify-between">
              <div className="lg:w-[800px] pb-12">
                <span className="py-4 uppercase flex font-bold">
                  Project description
                </span>
                <p className="text-justify text-base lg:text-lg">
                  {description}
                </p>
              </div>

              <>
                <ul className="">
                  <span className="uppercase font-bold">Tools</span>
                  {techStack?.map((stack, i) => (
                    <li className="pt-1" key={i}>
                      {stack}
                    </li>
                  ))}
                </ul>
              </>

              <div className="flex h-fit items-center gap-5">
                <LinkButton link={link} title={"source code"}>
                  <IoCodeOutline size={22} />
                </LinkButton>

                <LinkButton link={demo} title={"live demo"}>
                  <GoArrowUpRight size={22} />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      )}
      );
    </AnimatePresence>
  );
};

const RouteBackComponent = () => {
  const [isFocused, setFocused] = useState(false);
  const router = useRouter();
  const { values } = useMouseContext();

  const handleRouteBack = () => {
    values.setHovered(false);
    router.back();
  };

  const handleMouseEnter = (boolean) => {
    values.setHovered(boolean);
    setFocused(boolean);
  };
  const handleMouseLeave = (boolean) => {
    values.setHovered(boolean);
    setFocused(boolean);
  };

  const styledArrow = {
    initial: {
      x: 100,
    },
    enter: {
      x: 0,
      transition: {
        duration: 0.25,
        ease: [0.61, 1, 0.88, 1],
      },
    },
    exit: {
      x: 100,
      transition: {
        duration: 0.25,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseLeave(false)}
      className={` cursor-pointer  border-[1.5px] rounded-full py-1 px-2 w-fit     flex  items-center gap-2 transition-all duration-300  delay-75 ${
        isFocused ? "border-gray-white" : "border-gray-400"
      }`}
      onClick={handleRouteBack}
    >
      <span className=" bg-white w-8 h-8 rounded-full overflow-hidden  flex flex-col justify-center items-center">
        <motion.span
          variants={styledArrow}
          initial="initial"
          animate={isFocused ? "enter" : "exit"}
          className=""
        >
          <GoArrowLeft className="" size={20} color="black" />
        </motion.span>
      </span>
      Go Back
    </motion.div>
  );
};

export default Page;
