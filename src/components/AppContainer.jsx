"use client";

import { useEffect } from "react";
import { CustomCursor } from ".";
import menuState from "@/utils/menuState";
import { useMouseContext } from "@/context/MouseMoveContext";
import { AnimatePresence } from "framer-motion";

const AppContainer = ({ children }) => {
  const { values } = useMouseContext();

  useEffect(() => {
    let smoothScroll; // Declare smoothScroll variable outside useEffect to make it accessible in cleanup function
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      smoothScroll = new LocomotiveScroll({
        lenisOptions: {
          duration: 3.5,
        },
      });
    })();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <section className="">
      <CustomCursor />

      <div className=" max-w-sm  p-4  sm:max-w-md md:max-w-lg lg:max-w-4xl  xl:max-w-[1372px]  mx-auto">
        {" "}
        {children}{" "}
      </div>
    </section>
  );
};

export default AppContainer;
