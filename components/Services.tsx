import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { Container, OutlineNumber } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-16 overflow-hidden bg-ink text-white">
      <Container className="relative z-10 grid gap-14 py-28 md:py-40 lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-10 lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-[clamp(3.25rem,9vw,8.5rem)] uppercase leading-[0.95]">
              Nuestros
              <br />
              servicios
            </h2>
          </Reveal>
          <OutlineNumber
            n="04."
            className="hidden text-[clamp(10rem,22vw,20rem)] text-white lg:block"
          />
        </div>

        <ul className="lg:col-span-7">
          {services.map((s, i) => (
            <li key={s}>
              <Reveal delay={i * 0.05} y={20}>
                <div className="group relative flex items-center gap-5 overflow-hidden border-t border-white/15 px-1 py-5 md:gap-8 md:py-7 [li:last-child_&]:border-b">
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-bottom scale-y-0 bg-wic transition-transform duration-500 ease-out group-hover:scale-y-100"
                  />
                  <span className="relative font-heading text-sm font-bold tabular-nums text-white/40 transition-colors group-hover:text-ink/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex-1 font-heading text-[clamp(1.1rem,2.4vw,1.9rem)] font-extrabold uppercase tracking-tight text-wic transition-colors duration-300 group-hover:text-ink">
                    {s}
                  </span>
                  <ArrowUpRight className="relative size-6 -translate-x-2 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
