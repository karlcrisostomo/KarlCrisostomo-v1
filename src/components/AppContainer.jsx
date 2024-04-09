"use client";

import { useEffect } from "react";
import { CustomCursor } from ".";

const AppContainer = ({ children }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const smoothScroll = new LocomotiveScroll({
        lenisOptions: {
          duration: 2.1,
        },
      });
    })();
  }, []);

  return (
    <section className="">
      <CustomCursor />
      <div className=" xl:max-w-[1024px]  mx-auto"> {children} </div>
    </section>
  );
};

export default AppContainer;
