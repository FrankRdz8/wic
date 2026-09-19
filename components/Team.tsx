import Image from "next/image";
import { team } from "@/lib/content";
import { Container, OutlineNumber } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Team() {
  return (
    <section id="equipo" className="relative scroll-mt-16 overflow-hidden bg-wic text-ink">
      <OutlineNumber
        n="03."
        className="absolute -top-[2rem] right-[-1rem] text-[clamp(11rem,28vw,28rem)] text-ink md:-top-[3rem]"
      />
      <Container className="relative z-10 py-28 md:py-40">
        <Reveal>
          <h2 className="font-display text-[clamp(3.25rem,9vw,8.5rem)] uppercase leading-[0.95]">
            Nuestro
            <br className="sm:hidden" /> equipo
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-14 sm:grid-cols-3 md:mt-24">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="group relative size-52 overflow-hidden rounded-full bg-ink ring-0 ring-ink/0 transition-all duration-500 hover:ring-[6px] hover:ring-ink md:size-60">
                  <Image
                    src={m.photo.src}
                    width={m.photo.width}
                    height={m.photo.height}
                    alt={`Retrato de ${m.name}`}
                    sizes="240px"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-7 font-heading text-[15px] font-extrabold uppercase tracking-[0.22em]">
                  {m.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed md:text-base">
                  {m.roles.map((r) => (
                    <span key={r} className="block">
                      {r}
                    </span>
                  ))}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
