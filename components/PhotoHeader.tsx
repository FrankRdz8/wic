import Image from "next/image";
import type { Img } from "@/lib/images";
import { img } from "@/lib/images";
import Reveal from "@/components/Reveal";

/** Portada de sub-sección: foto oscurecida con título gigante, como las láminas divisoras del PDF. */
export default function PhotoHeader({
  id,
  title,
  bg,
}: {
  id: string;
  title: string;
  bg: Img;
}) {
  return (
    <section
      id={id}
      className="relative isolate flex min-h-[64svh] scroll-mt-16 items-center justify-center overflow-hidden bg-black px-4 py-32"
    >
      <Image
        src={bg.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/65" />
      <Reveal>
        <h2 className="text-balance text-center font-display text-[clamp(3.5rem,13vw,13rem)] uppercase leading-[1.05] text-white">
          {title}
        </h2>
      </Reveal>
      <Image
        src={img.logoWicWhite.src}
        width={img.logoWicWhite.width}
        height={img.logoWicWhite.height}
        alt=""
        aria-hidden
        className="absolute bottom-8 left-6 h-auto w-24 md:left-12 md:w-32"
      />
    </section>
  );
}
