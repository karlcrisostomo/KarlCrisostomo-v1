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

  const handleClick = (projectTitle) => {
    values.setHoveredSection("");
    router.push(`/fp/${projectTitle}`);
  };

  return (
    <StyledSection section="projects">
      <div
        id="projects"
        className="   z-10 w-full py-32 h-full flex flex-col justify-center items-center gap-10    "
      >
        {projects.map((item, idx) => (
          <div className=" " key={idx} onClick={() => handleClick(item.title)}>
            <ParallaxContainer
              img={item.image}
              key={idx}
              alt={item.alt}
              itemNumber={item.id}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </StyledSection>
  );
}

export default Projects;
