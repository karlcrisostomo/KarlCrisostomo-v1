"use client";

import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
import { About, AppContainer, Header, Navbar, Projects } from "@/components";

export default function Home() {
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);

  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    const handleReadyStateChange = () => {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    };

    handleReadyStateChange();
    document.addEventListener("readystatechange", handleReadyStateChange);

    return () => {
      document.removeEventListener("readystatechange", handleReadyStateChange);
    };
  }, []);

  return (
    <div className="max-w-md p-6 lg:p-12 sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-[1372px] mx-auto">
      <Suspense fallback={<Loading />}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <Header />
            <About />
            <Projects />
          </>
        )}
      </Suspense>
    </div>
  );
}
