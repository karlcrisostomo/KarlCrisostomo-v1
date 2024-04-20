import { About, Header, Projects } from "@/components";

export default function Home() {
  return (
    <>
      <Header  />
      <section id="about">
        <About />
      </section>
      <Projects />
    </>
  );
}
