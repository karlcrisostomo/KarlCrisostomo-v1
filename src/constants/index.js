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
  { title: "Facebook", Link: "/" },
  { title: "Instagram", Link: "/" },
  { title: "LinkedIn", Link: "/" },
  { title: "Email", Link: "/" },
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
    description: ` BOOKFINDR harnesses the capabilities 
      of the Google Books API to provide users 
      with seamless access to a vast repository of literary works 
      across a wide range of genres and subjects. 
      Built with the goal of facilitating efficient book discovery and exploration, 
      BOOKFINDR caters to a diverse audience, including avid readers, students, and casual browsers alike. `,
    image: proj1,
    alt: "BOOKFINDR",
    techStack: [
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
    techStack: [
      "JavaScript (ES6+)",
      "Next",
      "Axios",
      "Framer-Motion",
      "Tailwindcss",
    ],
    link: "https://github.com/karlcrisostomo/Pixel-Haven",
    demo: "https://pixel-haven.vercel.app/",
  },
  {
    id: "03",
    title: "PORTFOLI0-01",
    image: proj3,
    alt: "PORTFOLI0-01",
    techStack: ["JavaScript (ES6+)", "Next", "Framer-Motion", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/Portfolio-01",
    demo: "https://portfolio-01-beryl.vercel.app/",
  },
  {
    id: "04",
    title: "REYNALD DION PORTFOLIO",
    image: proj4,
    alt: "REYNALD_DION_PORTFOLIO",
    techStack: ["JavaScript (ES6+)", "Next", "Framer-Motion", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/Reynald_dion_portfolio",
    demo: "https://reynald-dion-portfolio.vercel.app/",
  },
  {
    id: "05",
    title: "NOTES WEB-APP",
    image: proj5,
    alt: "NOTES WEB-APP",
    techStack: ["JavaScript (ES6+)", "Next", "Framer-Motion", "Tailwindcss"],
    link: "https://github.com/karlcrisostomo/Reynald_dion_portfolio",
    demo: "https://reynald-dion-portfolio.vercel.app/",
  },
  {
    id: "06",
    title: "FireFighting Drone - Prototype ",
    image: proj6,
    alt: "FireFighting Drone (Prototype)",
  },
  {
    id: "07",
    title: "Automated Hydroponics Nutrient Solution Control ",
    image: proj7,
    alt: "FireFighting Drone (Prototype)",
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

export const techStack = [
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
