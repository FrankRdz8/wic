"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { img } from "@/lib/images";
import { ease } from "@/components/Reveal";

const WORD = "PORTFOLIO";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink"
    >
      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pt-24 font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-white/70 md:px-12">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Diseño gráfico &amp; marketing digital
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hidden items-center gap-2 md:flex"
        >
          Scroll <ArrowDown className="size-3.5" />
        </motion.span>
      </div>

      <h1
        aria-label="Portfolio de WIC Design"
        className="relative z-20 mt-3 px-3 text-center font-display text-[clamp(4.5rem,22.5vw,30rem)] uppercase leading-[0.86] text-white drop-shadow-[0_14px_36px_rgb(0_0_0/0.4)] md:mt-4"
      >
        {WORD.split("").map((letter, i) => (
          <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.02em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.9, ease }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Foto: arranca detrás de la parte baja del título, como en la lámina del PDF */}
      <div className="absolute inset-x-[5%] bottom-0 top-[26%] overflow-hidden md:top-[44%]">
        <motion.div style={{ y: photoY }} className="absolute inset-x-0 -top-[8%] bottom-[-8%]">
          <Image
            src={img.heroStairs.src}
            alt="Escalera caracol en blanco y negro vista desde arriba"
            fill
            priority
            sizes="90vw"
            className="object-cover object-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease }}
          className="absolute bottom-6 right-6 w-[clamp(96px,14vw,210px)] md:bottom-8 md:right-10"
        >
          <Image
            src={img.logoWicYellow.src}
            width={img.logoWicYellow.width}
            height={img.logoWicYellow.height}
            alt="Logo de WIC Design"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
