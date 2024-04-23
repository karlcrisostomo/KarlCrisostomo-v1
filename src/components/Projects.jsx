"use client";
import { projects } from "@/constants";
import Image from "next/image";
import React from "react";
import ParallaxContainer from "./ParallaxContainer";
import { useRouter } from "next/navigation";
import { useMouseContext } from "@/context/MouseMoveContext";

const Projects = () => {
  const router = useRouter();
  const { values } = useMouseContext();

  const handleClick = (projectId) => {
    router.push(`/fp/${projectId}`);
  };

  return (
    <div
      id="projects"
      onMouseEnter={() => values.setHoveredSection("Projects")}
      onMouseLeave={() => values.setHoveredSection("")}
      className="   z-10 w-full py-32 h-full flex flex-col justify-center items-center gap-10    "
    >
      {projects.map((item, idx) => (
        <div className=" " key={idx} onClick={() => handleClick(item.id)}>
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
  );
};

export default Projects;
