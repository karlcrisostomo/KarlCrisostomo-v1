"use client";

import { useEffect } from "react";
import { CustomCursor } from ".";
import menuState from "@/utils/menuState";
import { useMouseContext } from "@/context/MouseMoveContext";
import { AnimatePresence } from "framer-motion";

const AppContainer = ({ children }) => {
  const { values } = useMouseContext();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const smoothScroll = new LocomotiveScroll({
        lenisOptions: {
          duration: 3.5,
        },
      });
    })();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <section className="">
      <CustomCursor />

      <div className=" "> {children} </div>
    </section>
  );
};

export default AppContainer;
