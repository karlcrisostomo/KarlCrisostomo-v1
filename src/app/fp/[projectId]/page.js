import { projects } from "@/constants";
import Image from "next/image";

const page = ({ params }) => {
  const project = projects.find((proj) => proj.id === params.projectId);

  const { title, image, alt, description } = project;

  return (
    <div  className="  ">
        <h1  className=" py-10 text-5xl ">{title}</h1>
      <Image className="   w-full  " src={image} alt={alt} />


    <p>{description}</p>
    </div>
  );
};

export default page;
