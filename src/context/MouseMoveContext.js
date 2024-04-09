"use client";

import { createContext, useContext, useState, useEffect } from "react";

const MouseMoveContext = createContext();

export const useMouseContext = () => {
  return useContext(MouseMoveContext);
};

export const MouseProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [hoveredSection, setHoveredSection] = useState("");
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const values = {
    mousePosition,
    isHovered,
    setHovered,
    hoveredSection,
    setHoveredSection,
  };

  return (
    <MouseMoveContext.Provider value={{ values }}>
      {children}
    </MouseMoveContext.Provider>
  );
};
