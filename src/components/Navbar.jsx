"use client";

import { contact } from "@/constants";
import { useMouseContext } from "@/context/MouseMoveContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Logo = () => {
  return (
    <div className=" w-full ">
      <Image src={"../logo.svg"} width={40} height={80} alt="logo" />
    </div>
  );
};

const Email = () => {
  const email = "karlcrisostomo.dev@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className=" w-full text-end    ">
      <button onClick={handleEmailClick}>{email} </button>
    </div>
  );
};

const Navbar = () => {
  const [setBg, setBgChange] = useState(false);
  const { values } = useMouseContext();

  useEffect(() => {
    const handleScrollNav = () => {
      setBgChange(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  return (
    <nav
      className={twMerge(
        "  fixed left-0  w-full z-50  top-0 ",
        setBg ? " bg-white/15 backdrop-blur-sm " : null
      )}
    >
      <div
        className="
          flex justify-between  items-center container mx-auto "
      >
        <Logo />
        <ul className=" flex justify-center gap-6 py-9 p-2 ">
          {contact.map((item, idx) => (
            <li
              onMouseEnter={() => {
                values.setHovered(true);
              }}
              onMouseLeave={() => {
                values.setHovered(false);
              }}
              className=" cursor-pointer  "
              key={idx}
            >
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
        <Email />
      </div>
    </nav>
  );
};

export default Navbar;
