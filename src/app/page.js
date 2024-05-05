"use client";

import { About, Footer, Header, Navbar, Projects } from "@/components";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      setLoading(true);
    };
  }, []);

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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
