"use client";

import { useEffect } from "react";
import { CustomCursor } from ".";
import LocomotiveScroll from "locomotive-scroll";

const AppContainer = ({ children }) => {
  useEffect(() => {
    const smoothScoll = new LocomotiveScroll({
      lenisOptions: {
        duration: 2.1,
      },
    });
  }, []);
  return (
    <section className="">
      <CustomCursor />
      <div className=" xl:max-w-[1024px]  mx-auto"> {children} </div>
    </section>
  );
};

export default AppContainer;
