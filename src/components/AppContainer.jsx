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
    <section className="">
      {cursorActive && <CustomCursor />}

      <div className=" "> {children} </div>
    </section>
  );
};

export default AppContainer;
