import { projects } from "@/constants";
import Image from "next/image";
import React from "react";
import ParallaxContainer from "./ParallaxContainer";

const Projects = () => {
  return (
    <div className=" z-10 w-full py-32 flex flex-col justify-center items-center gap-10    ">
      {projects.map((item, idx) => (
        <div className=" " key={idx}>
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
