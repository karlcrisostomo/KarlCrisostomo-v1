"use client";

import { About, AppContainer, Header } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <About />
    </AppContainer>
  );
}
