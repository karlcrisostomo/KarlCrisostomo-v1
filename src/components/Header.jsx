"use client";

import { useMouseContext } from "@/context/MouseMoveContext";
import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  const intro = ` The Web—Where Creativity Becomes My Playground `;
  const { values } = useMouseContext();



  return (
    <div className="   ">
      <div className=" py-[500px]   tracking-wider text-center  ">
        <p
          onMouseEnter={() => {
            values.setHoveredSection();
          }}
          onMouseLeave={() => {
            values.setHoveredSection("");
          }}
          className="min-[0px]:text-4xl min-[0px]:tracking-tight  lg:text-7xl lg:tracking-wider"
        >
          {intro}
        </p>

        <div className="  flex justify-center pt-9 ">
          <a
            className=" cursor-pointer flex items-center  text-sm  w-fit  rounded-lg  p-4 hover:-translate-y-2 transition-all duration-200 border border-white/25 hover:bg-white/10 hover:border-white/45
               "
          >
            <p>Resume</p>
            <GoArrowUpRight size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
