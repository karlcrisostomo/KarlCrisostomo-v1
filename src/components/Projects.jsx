"use client";
import { projects } from "@/constants";
import Image from "next/image";
import React from "react";
import ParallaxContainer from "./ParallaxContainer";
import { useRouter } from "next/navigation";
import { useMouseContext } from "@/context/MouseMoveContext";
import { useEffect } from "react";
import StyledSection from "./StyledSection";
function Projects() {
  const router = useRouter();
  const { values } = useMouseContext();

  useEffect(() => {
    const cleanup = () => {
      values.setHoveredSection("");
    };
    return () => cleanup;
  }, [values.isHoveredSection]);

  const handleClick = (id) => {
    values.setHoveredSection("");
    router.push(`/fp/${id}`);
  };

  return (
    <StyledSection section="projects">
      <div id="projects" className="  w-full py-32 h-full    ">
        <p className=" min-[200px]:text-4xl text-7xl flex flex-col items-center pb-28 justify-center uppercase font-normal ">
          {" "}
          <span className=" min-[200px]:text-5xl md:text-7xl  lg:text-8xl xl:text-[6rem]  italic font-extralight">
            featured{" "}
          </span>{" "}
          work{" "}
        </p>

        <div
          className=" flex flex-col justify-center items-center gap-10 "
          onMouseEnter={() => values.setHoveredSection("project")}
          onMouseLeave={() => values.setHoveredSection("")}
        >
          {projects.map((item, idx) => (
            <div key={idx} onClick={() => handleClick(item.id)}>
              <ParallaxContainer
                img={item.image}
                key={idx}
                idx={idx}
                alt={item.alt}
                itemNumber={item.id}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledSection>
  );
}

export default Projects;
