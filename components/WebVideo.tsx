import Image from "next/image";
import { webVideo } from "@/lib/content";
import { img } from "@/lib/images";
import { Pill } from "@/components/ui";
import Reveal from "@/components/Reveal";

/** Diseño y desarrollo web + producción de video: dos portadas enfrentadas con acceso directo. */
export default function WebVideo() {
  return (
    <section className="grid bg-black text-white md:grid-cols-2">
      {webVideo.map((f, i) => (
        <div
          key={f.id}
          id={f.id}
          className="relative isolate flex min-h-[72svh] scroll-mt-16 flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
        >
          <Image
            src={f.bg.src}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="-z-20 object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/70" />
          <Reveal delay={i * 0.1} className="flex flex-col items-center gap-9">
            <h2 className="max-w-[12ch] text-balance font-display text-[clamp(2.75rem,6.4vw,6rem)] uppercase leading-[1.05]">
              {f.title}
            </h2>
            <Pill href={f.href} external>
              {f.cta}
            </Pill>
          </Reveal>
          <Image
            src={img.logoWicWhite.src}
            width={img.logoWicWhite.width}
            height={img.logoWicWhite.height}
            alt=""
            aria-hidden
            className="absolute bottom-7 left-6 h-auto w-20 md:w-24"
          />
        </div>
      ))}
    </section>
  );
}
