import Image from "next/image";
import { about } from "@/lib/content";
import { img } from "@/lib/images";
import { Container, OutlineNumber } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-16 overflow-hidden bg-black text-white">
      <OutlineNumber
        n="02."
        className="absolute -top-[2rem] right-[-1rem] text-[clamp(13rem,34vw,34rem)] text-white md:-top-[4rem]"
      />
      <Container className="relative z-10 py-28 md:py-40">
        <Reveal>
          <p className="font-script text-[clamp(3.5rem,8vw,7rem)] leading-none text-wic -rotate-6 origin-left">
            Somos
          </p>
          <h2 className="-mt-2 font-display text-[clamp(5rem,17vw,16rem)] uppercase leading-[0.88] md:-mt-4">
            WIC
            <br />
            Design
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="font-heading text-[clamp(0.95rem,1.6vw,1.5rem)] font-extrabold uppercase tracking-[0.2em] text-wic">
              {about.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
              {about.text}
            </p>
          </Reveal>
          <div className="flex items-end justify-start lg:col-span-5 lg:justify-end">
            <Image
              src={img.logoWicWhite.src}
              width={img.logoWicWhite.width}
              height={img.logoWicWhite.height}
              alt="Logo de WIC Design"
              className="h-auto w-[clamp(140px,18vw,260px)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
