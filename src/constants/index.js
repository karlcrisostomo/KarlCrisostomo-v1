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
  corpoAttire,
  corpoAttireBlack,
  featuredImg6,
  featuredImg7,
  proj8,
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
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/karl-michael-crisostomo-078ba1214/",
  },
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
    { title: "group_pic_1.jpg", src: featuredImg2, alt: "group picture 1" },
    { title: "group_pic_2.jpg", src: featuredImg1, alt: "group picture 2" },
    { title: "group_pic_3.jpg", src: featuredImg3, alt: "group picture 3" },
  ],
  [
    {
      title: "flight_test_ff.jpg",
      src: featuredImg4,
      alt: "Thesis Group pic 1",
    },
    { title: "group_pic.jpg", src: featuredImg5, alt: "Thesis Group pic 2" },
  ],
  [
    {
      title: "corporate_attire_picture.jpg",
      src: corpoAttire,
      alt: "profile picture",
    },
    {
      title: "black_n_white.jpg",
      src: corpoAttireBlack,
      alt: " black & white profile picture",
    },
  ],

  [
    { title: "museum.jpg", src: featuredImg7, alt: "pet 1" },
    { title: "random_ferris_wheel.jpg", src: featuredImg6, alt: "pet 2" },
  ],
];

export const projects = [
  {
    id: "01",
    title: "BOOKFINDR",
    description: `A project-based learning website, BOOKFINDR leverages the Google Books API 
    to provide users with seamless access to a vast collection of literary works across various genres.`,
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
    description: `Built a free stock image website inspired by Pexels and Unsplash. 
    Integrated the Pexels API to enable users to search and download high-quality photos 
    and videos through various filters and categories.`,
    image: proj2,
    alt: "PIXELHAVEN",
    tools: ["JavaScript (ES6+)", "Next", "Axios", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/Pixel-Haven",
    demo: "https://pixel-haven.vercel.app/",
  },
  {
    id: "03",
    title: "PORTFOLI0-01",
    description: `Designed and developed a personal portfolio website showcasing my skills and projects. 
    Implemented interactive elements and a visually striking layout inspired by Awwwards' best design trends.
      `,
    image: proj3,
    alt: "PORTFOLI0-01",
    tools: ["JavaScript (ES6+)", "Next", "Framer-Motion", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/KarlCrisostomo-v1.git",
    demo: "https://karl-crisostomo-v1.vercel.app/",
  },
  {
    id: "04",
    title: "REYNALD DION PORTFOLIO",
    description: `Developed a portfolio website for a 
    friend as part of a project-based learning experience.`,
    image: proj4,
    alt: "REYNALD_DION_PORTFOLIO",
    tools: ["JavaScript (ES6+)", "React", "Framer-motion", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/Reynald_dion_portfolio",
    demo: "https://reynald-dion-portfolio.vercel.app/",
  },
  {
    id: "05",
    title: "NOTES Management",
    description: `Developed a CRUD website as project-based learning, managing Notes 
    and utilizing local storage for data persistence.`,
    image: proj5,
    alt: "NOTES",
    tools: ["JavaScript (ES6+)", "Next", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/note-webapp.git",
    demo: "https://note-webapp-pi.vercel.app/",
  },
  {
    id: "06",
    title: "Menu Management",
    description: `Developed a user-friendly menu CRUD website using Firebase Realtime database for easy management of 
                  menu items.`,
    image: proj8,
    alt: "Menu Management",
    tools: [
      "JavaScript (ES6+)",
      "Next",
      "Tailwindcss, Firebase Realtime Database",
    ],
    link: "https://github.com/karlcrisostomo/crud-menu.git",
    demo: "https://crud-menu.vercel.app/",
  },
  {
    id: "07",
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
    id: "08",
    title: "Automated Hydroponics Nutrient Solution Control ",
    description: `A hardware prototype thesis project by a fellow classmate, 
    which I assisted with programming and calibration of sensors. I focused on 
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
  "MongoDB",
  "Firebase",
  "AJAX",
  "Figma",
  "Framer Motion",
];
