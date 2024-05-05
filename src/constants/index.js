import {
  featuredImg1,
  featuredImg2,
  featuredImg3,
  featuredImg4,
  featuredImg5,
  proj1,
  proj2,
  proj3,
  proj4,
  proj5,
  proj6,
  proj7,
} from "../../public/assets";

import { pet1, pet2, pet3, pet4 } from "../../public/assets/myPets";
export const links = [
  { id: "#about", title: "About", link: "/" },
  { id: "#projects", title: "Projects", link: "/" },
  { id: "#contact", title: "Contact", link: "/" },
];

export const footerLinks = [
  { title: "Facebook", link: "https://www.facebook.com/karl.crisostomo12" },
  { title: "Instagram", link: "https://www.instagram.com/karlcrstm/" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/karl-michael-crisostomo-078ba1214/" },
  { title: "Email", link: "karlcrisostomo.dev@gmail.com" },
];

export const featuredImages = [
  [
    { title: "max.jpg", src: pet1, alt: "pet 1" },
    { title: "kelly.jpg", src: pet2, alt: "pet 2" },
    { title: "enzo.jpg", src: pet3, alt: "pet 3" },
    { title: "kitty.jpg", src: pet4, alt: "pet 4" },
  ],
  [
    { src: featuredImg1, alt: "group of friends pic 1" },
    { src: featuredImg2, alt: "group of friends pic 2" },
    { src: featuredImg3, alt: "group of friends pic 3" },
  ],
  [
    { src: featuredImg4, alt: "Thesis Group pic 1" },
    { src: featuredImg5, alt: "Thesis Group pic 2" },
  ],
  [
    { title: "max.jpg", src: pet1, alt: "pet 1" },
    { title: "kelly.jpg", src: pet2, alt: "pet 2" },
    { title: "enzo.jpg", src: pet3, alt: "pet 3" },
    { title: "kitty.jpg", src: pet4, alt: "pet 4" },
  ],
  [
    { title: "max.jpg", src: pet1, alt: "pet 1" },
    { title: "kelly.jpg", src: pet2, alt: "pet 2" },
    { title: "enzo.jpg", src: pet3, alt: "pet 3" },
    { title: "kitty.jpg", src: pet4, alt: "pet 4" },
  ],
  [
    { title: "max.jpg", src: pet1, alt: "pet 1" },
    { title: "kelly.jpg", src: pet2, alt: "pet 2" },
    { title: "enzo.jpg", src: pet3, alt: "pet 3" },
    { title: "kitty.jpg", src: pet4, alt: "pet 4" },
  ],
];

export const projects = [
  {
    id: "01",
    title: "BOOKFINDR",
    description: `A project-based learning website, BOOKFINDR, harnesses 
    the capabilities of the Google Books API to provide users with seamless 
    access to a vast repository of literary works across a wide range of genres and subjects. `,
    image: proj1,
    alt: "BOOKFINDR",
    tools: [
      "JavaScript (ES6+)",
      "Next",
      "Axios",
      "Framer-Motion",
      "Tailwindcss",
    ],
    link: "https://github.com/karlcrisostomo/BOOK_FINDR-V2",
    demo: "https://book-findr-v2.vercel.app/",
  },

  {
    id: "02",
    title: "PIXELHAVEN",
    description: `PixelHaven is a dynamic web application 
    built with Next.js, inspired by the functionality of the 
    popular stock image website Pexels. Leveraging the Pexels API, 
    PixelHaven provides users with the ability to seamlessly search 
    for high-quality photos and videos. With a sleek interface and efficient 
    search functionality, PixelHaven offers a user-friendly experience for 
    accessing diverse multimedia content. `,
    image: proj2,
    alt: "PIXELHAVEN",
    tools: ["JavaScript (ES6+)", "Next", "Axios", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/Pixel-Haven",
    demo: "https://pixel-haven.vercel.app/",
  },
  {
    id: "03",
    title: "PORTFOLI0-01",
    description: `A first portfolio site built with nextjs and framer-motion  `,
    image: proj3,
    alt: "PORTFOLI0-01",
    tools: ["JavaScript (ES6+)", "Next", "Framer-Motion", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/KarlCrisostomo-v1.git",
    demo: "https://karl-crisostomo-v1.vercel.app/",
  },
  {
    id: "04",
    title: "REYNALD DION PORTFOLIO",
    description: `A portfolio website of a friend co-created by me 
    added some functionality and adjust some typeface, 
    font size and web design based on the client's preferences  `,
    image: proj4,
    alt: "REYNALD_DION_PORTFOLIO",
    tools: ["JavaScript (ES6+)", "React", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/Reynald_dion_portfolio",
    demo: "https://reynald-dion-portfolio.vercel.app/",
  },
  {
    id: "05",
    title: "NOTES WEB-APP",
    description: ` An experimental CRUD notes web application utilizing localStorage 
    as its storage and Axios for data fetching."      `,
    image: proj4,
    image: proj5,
    alt: "NOTES WEB-APP",
    tools: ["JavaScript (ES6+)", "Next", "Framer-Motion", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/note-webapp.git",
    demo: "https://note-webapp-pi.vercel.app/",
  },
  {
    id: "06",
    title: "FireFighting Drone - Prototype ",
    description: `A hardware prototype thesis project for firefighting operations,
     designed to deploy fire extinguisher balls weighing about 1 kilogram. 
     This prototype was awarded as the best thesis despite being primarily electronics-based 
     with minimal programming involved.   `,
    image: proj6,
    alt: "FireFighting Drone (Prototype)",
    tools: [
      "C++",
      "Arduino Circuit Board",
      "DJI Flight Controller",
      "Hexacopter - Frame",
      "Gripper Arms ",
      "Fire Extinguisher Ball 1kg",
      "Brushless Motors",
      "Propellers",
      "GPS Sensor ",
    ],
  },
  {
    id: "07",
    title: "Automated Hydroponics Nutrient Solution Control ",
    description: `A hardware prototype thesis project by a fellow classmate, 
    which I helped with programming and calibration of sensors. I focused on 
    developing its logging system to record when and at what time the plants have been watered. 
    Additionally, I implemented an IoT system to monitor the plant's pH level, water level, 
    and total dissolved solids (TDS) through smartphones or other devices using the BlynkApp.`,
    image: proj7,
    alt: "Automated Hydroponics Nutrient Solution Control",
    tools: [
      "C++",
      "esp32 module",
      "Arduino Board",
      "TDS Meter Sensor",
      "Water Sensor ",
      "PH level Sensor",
      "Blynk IoT ",
    ],
    link: "https://github.com/karlcrisostomo/Automated-Hydroponics-Nutrient-Solution-Control",
  },
];

export const aboutParagraphs = {
  p1: `
  I enjoy building things related to web development. 
  My interest in web development started when I was building an IoT (Internet of Things) 
  web-based project for my Arduino temperature monitor. 
    
  `,
  p2: `
  Today, my focus lies in front-end development, 
  where I am dedicated to crafting responsive websites that elevate user experience.`,
};

export const experience = [
  {
    company: "Pixel8 Web Solutions & Consultancy Inc.",
    date: "4/21/2023 - 5/27/2023",
    position: "Front-End Developer Intern",
  },
];

export const awards = [
  {
    award: "Best Capstone Design",
  },
];

export const tools = [
  "JavaScript (ES6+)",
  "React",
  "Next",
  "Axios",
  "Tailwindcss",
  "Figma",
  "Framer Motion",
];

export const letters = {
  p1: `
    i am atually good web developer and i have created almsot 100 websites basically i am god of web development
    no one can surpass me even elon musk i am too much for web dev might try AI soon
  `,
  p2: `i am actually pathetic web developer i created shit web apps i am just a front end guy who could not even
   develope a simple crud webapp without using chatgpt`,
};
