"use client";

import { useEffect } from "react";
import { CustomCursor } from ".";

const AppContainer = ({ children }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const smoothScroll = new LocomotiveScroll({
        lenisOptions: {
          duration: 3.5,
        },
      });
    })();
  }, []);

  return (
    <section className="">
      <CustomCursor />

      <div className=" "> {children} </div>
    </section>
  );
};

export default AppContainer;
