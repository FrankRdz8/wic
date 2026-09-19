import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import { ProjectsDivider, Logofolio } from "@/components/Projects";
import Clients from "@/components/Clients";
import WebVideo from "@/components/WebVideo";
import Print from "@/components/Print";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Intro />
        <About />
        <Team />
        <Services />
        <ProjectsDivider />
        <Logofolio />
        <Clients />
        <WebVideo />
        <Print />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
