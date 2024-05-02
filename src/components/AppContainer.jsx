"use client";

import { useEffect, useState } from "react";
import { CustomCursor } from ".";

const AppContainer = ({ children }) => {
  const [cursorActive, setCursorActive] = useState(true);

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

  useEffect(() => {
    const handleCursor = () => {
      if (window.innerWidth <= 768) {
        setCursorActive(false);
      } else {
        setCursorActive(true);
      }
    };

    handleCursor();
    window.addEventListener("resize", handleCursor);

    return () => {
      window.removeEventListener("resize", handleCursor);
    };
  }, []);

  return (
    <section className="max-w-md p-6 lg:p-12 sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-[1372px] mx-auto">
      {cursorActive && <CustomCursor />}

      <div className=" "> {children} </div>
    </section>
  );
};

export default AppContainer;
