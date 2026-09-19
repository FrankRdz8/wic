import Image from "next/image";
import { logofolio } from "@/lib/content";
import { img } from "@/lib/images";
import { Container, OutlineNumber, Tag } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import PhotoHeader from "@/components/PhotoHeader";

/** 05 · Proyectos: lámina divisora amarilla con el título en blanco. */
export function ProjectsDivider() {
  return (
    <section
      id="proyectos"
      className="relative flex min-h-[82svh] scroll-mt-16 flex-col justify-between overflow-hidden bg-wic"
    >
      <Container className="relative z-10 pt-32 md:pt-40">
        <Reveal>
          <h2 className="font-display text-[19vw] md:text-[min(22.5vw,20rem)] uppercase leading-[0.9] text-white">
            Proyectos
          </h2>
        </Reveal>
      </Container>
      <Container className="relative z-10 pb-10">
        <Image
          src={img.logoWicWhite.src}
          width={img.logoWicWhite.width}
          height={img.logoWicWhite.height}
          alt="Logo de WIC Design"
          className="h-auto w-24 md:w-32"
        />
      </Container>
      <OutlineNumber
        n="05."
        className="absolute -bottom-[3rem] -right-[1rem] text-[clamp(12rem,32vw,32rem)] text-white md:-bottom-[6rem]"
      />
    </section>
  );
}

/** Logofolio: cinco casos de identidad, alternando fondo oscuro y claro como en el PDF. */
export function Logofolio() {
  return (
    <>
      <PhotoHeader id="logofolio" title="Logofolio" bg={img.logofolioBg} />
      {logofolio.map((c, i) => (
        <article
          key={c.id}
          id={c.id}
          className={`scroll-mt-16 ${c.dark ? "bg-ink text-white" : "bg-white text-ink"}`}
        >
          <Container className="py-20 md:py-28">
            <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-7">
                <Tag>
                  {String(i + 1).padStart(2, "0")} / {String(logofolio.length).padStart(2, "0")}
                </Tag>
                <h3 className="mt-5 text-balance font-display text-[clamp(3rem,8.5vw,8rem)] uppercase leading-[0.95]">
                  {c.name}
                </h3>
              </Reveal>
              <Reveal className="lg:col-span-5" delay={0.1}>
                <p className="text-pretty text-[15px] leading-relaxed opacity-85 md:text-base">
                  {c.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Conceptos de marca">
                  {c.concepts.map((k) => (
                    <li
                      key={k}
                      className={`border px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.18em] ${
                        c.dark ? "border-white/30" : "border-ink/30"
                      }`}
                    >
                      {k}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal className="mt-12 md:mt-16" delay={0.05}>
              <Gallery rows={c.rows} sizes="(min-width: 1024px) 40vw, 100vw" />
            </Reveal>
          </Container>
        </article>
      ))}
    </>
  );
}
