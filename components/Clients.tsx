import Image from "next/image";
import { clients } from "@/lib/content";
import { img } from "@/lib/images";
import { Container, InstagramIcon, Pill } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import PhotoHeader from "@/components/PhotoHeader";

type Client = typeof clients.soles | typeof clients.npp | typeof clients.almaq;

function ClientCase({ c }: { c: Client }) {
  return (
    <article id={c.id} className="scroll-mt-16 bg-white text-ink">
      <Container className="py-20 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h3 className="font-display text-[clamp(3rem,9vw,8.5rem)] uppercase leading-[0.95]">
            {c.name}
          </h3>
          {c.logo && (
            <Image
              src={c.logo.src}
              width={c.logo.width}
              height={c.logo.height}
              alt={c.logoAlt}
              className="h-auto w-[clamp(150px,20vw,280px)]"
            />
          )}
        </Reveal>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="space-y-4 text-pretty text-[15px] leading-relaxed">
              {c.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Servicios incluidos">
              {c.tags.map((t) => (
                <li
                  key={t}
                  className="border border-ink/25 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[0.14em]"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Pill href={c.instagram} external>
                <InstagramIcon className="size-4" />
                Explorar el perfil
              </Pill>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <Gallery rows={c.rows} sizes="(min-width: 1024px) 720px, 100vw" />
          </Reveal>
        </div>
      </Container>
    </article>
  );
}

export default function Clients() {
  const s = clients.soles;
  return (
    <>
      <PhotoHeader id="clientes" title={clients.title} bg={img.clientsBg} />

      <ClientCase c={s} />

      {/* Soles: campañas y reportes, sobre fondo oscuro como en el PDF */}
      <div className="bg-ink text-white">
        <Container className="py-20 md:py-28">
          <Reveal>
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
              Soles ONG
            </p>
            <h3 className="mt-3 font-heading text-[clamp(1.5rem,3.4vw,2.75rem)] font-extrabold uppercase tracking-[0.12em]">
              {s.campaigns.title}
            </h3>
          </Reveal>
          <Reveal className="mt-10 md:mt-14" delay={0.08}>
            <Gallery rows={s.campaigns.rows} sizes="(min-width: 1024px) 45vw, 100vw" />
          </Reveal>

          <div className="mt-24 grid items-center gap-10 border-t border-white/15 pt-16 lg:grid-cols-12 lg:gap-16 md:mt-32 md:pt-24">
            <Reveal className="lg:col-span-5">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
                Soles ONG
              </p>
              <h3 className="mt-3 font-heading text-[clamp(1.5rem,3.4vw,2.75rem)] font-extrabold uppercase tracking-[0.12em]">
                {s.reports.title}
              </h3>
              <p className="mt-6 text-pretty text-[15px] leading-relaxed text-white/80">
                {s.reports.text}
              </p>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.1}>
              <Gallery rows={[{ items: [s.reports.image], maxH: 480 }]} sizes="(min-width: 1024px) 720px, 100vw" />
            </Reveal>
          </div>
        </Container>
      </div>

      <div className="border-t border-ink/10">
        <ClientCase c={clients.npp} />
      </div>
      <div className="border-t border-ink/10">
        <ClientCase c={clients.almaq} />
      </div>
    </>
  );
}
