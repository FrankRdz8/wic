"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { img } from "@/lib/images";
import { ease } from "@/components/Reveal";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6 md:px-12">
          <a href="#top" onClick={() => setOpen(false)} aria-label="WIC Design, ir al inicio">
            <Image
              src={img.logoWicWhite.src}
              width={img.logoWicWhite.width}
              height={img.logoWicWhite.height}
              alt="WIC Design"
              priority
              className="h-9 w-auto"
            />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 transition-colors hover:text-wic"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="rounded-full bg-wic px-5 py-2.5 font-heading text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-white"
            >
              Trabajemos juntos
            </a>
          </nav>

          <button
            type="button"
            className="-mr-2 p-2 text-white md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-wic px-6 pb-10 pt-28 text-ink md:hidden"
          >
            <ul className="space-y-1">
              {nav.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-[clamp(3rem,15vw,5rem)] uppercase leading-[1.05]"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="self-start rounded-full bg-ink px-7 py-3 font-heading text-[12px] font-extrabold uppercase tracking-[0.2em] text-white"
            >
              Trabajemos juntos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
