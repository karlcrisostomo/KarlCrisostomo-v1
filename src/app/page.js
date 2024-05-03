"use client";

import { useState, useEffect, Suspense } from "react";
import Loading from "./fp/[projectId]/loading";
import { About, AppContainer, Header, Navbar, Projects } from "@/components";
import Contact from "@/components/Contact";

export default function Home() {
  const [isloading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);

  //   return () => clearTimeout(timeout);
  // }, []);

  // useEffect(() => {
  //   const handleReadyStateChange = () => {
  //     if (document.readyState === "complete") {
  //       setLoading(false);
  //     }
  //   };

  //   handleReadyStateChange();
  //   document.addEventListener("readystatechange", handleReadyStateChange);

  //   return () => {
  //     document.removeEventListener("readystatechange", handleReadyStateChange);
  //   };
  // }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact/>
    </>
  );
}
