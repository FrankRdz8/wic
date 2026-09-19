import { print } from "@/lib/content";
import { img } from "@/lib/images";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import PhotoHeader from "@/components/PhotoHeader";

export default function Print() {
  return (
    <>
      <PhotoHeader id="impresion" title={print.title} bg={img.printBg} />
      <div className="bg-ink text-white">
        <Container className="space-y-24 py-20 md:space-y-32 md:py-28">
          {print.blocks.map((b) => (
            <section key={b.title}>
              <Reveal>
                <h3 className="text-center font-heading text-[clamp(1.1rem,2.4vw,1.9rem)] font-extrabold uppercase tracking-[0.2em] text-wic">
                  {b.title}
                </h3>
              </Reveal>
              <Reveal className="mt-10 md:mt-14" delay={0.08}>
                <Gallery rows={b.rows} sizes="(min-width: 1024px) 45vw, 100vw" />
              </Reveal>
            </section>
          ))}
        </Container>
      </div>
    </>
  );
}
