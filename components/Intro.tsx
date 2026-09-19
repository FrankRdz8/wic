import { intro } from "@/lib/content";
import { Container, OutlineNumber } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Intro() {
  return (
    <section id="intro" className="relative scroll-mt-16 overflow-hidden bg-wic text-ink">
      <Container className="relative z-10 pb-60 pt-28 md:py-44">
        <Reveal>
          <h2 className="font-display text-[clamp(3.25rem,10.5vw,10rem)] uppercase leading-[0.95]">
            {intro.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed md:mt-12 md:text-lg">
            {intro.text}
          </p>
        </Reveal>
      </Container>
      <OutlineNumber
        n="01."
        className="absolute -bottom-[3.5rem] -right-[1.5rem] text-[clamp(13rem,34vw,34rem)] text-ink md:-bottom-[7rem]"
      />
    </section>
  );
}
