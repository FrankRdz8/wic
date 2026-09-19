import Image from "next/image";
import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { contact } from "@/lib/content";
import { img } from "@/lib/images";
import { Container, InstagramIcon } from "@/components/ui";
import Reveal from "@/components/Reveal";

function ContactLink({
  href,
  icon,
  children,
  external,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 text-base font-medium md:text-lg"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-wic text-ink transition-colors duration-300 group-hover:bg-wic">
        {icon}
      </span>
      <span className="underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-ink">
        {children}
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 overflow-hidden bg-white text-ink">
      <Container className="pb-24 pt-28 md:pb-32 md:pt-40">
        <Reveal>
          <h2 className="relative text-center font-display text-[clamp(3.25rem,16.5vw,16.5rem)] uppercase leading-[0.9] text-wic">
            <span className="block border-b-2 border-wic pb-[0.04em]">Trabajemos</span>
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-[45%] -rotate-6 whitespace-nowrap font-script text-[0.92em] normal-case leading-none text-ink"
            >
              juntos
            </span>
            <span className="sr-only"> juntos</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-32 flex flex-col items-center justify-center gap-6 md:mt-44 md:flex-row md:gap-14">
            <li>
              <ContactLink href={`mailto:${contact.email}`} icon={<Mail className="size-5" />}>
                {contact.email}
              </ContactLink>
            </li>
            <li>
              <ContactLink
                href={contact.instagram.href}
                external
                icon={<InstagramIcon className="size-5" />}
              >
                {contact.instagram.handle}
              </ContactLink>
            </li>
            <li>
              <ContactLink href={contact.phone.href} external icon={<Phone className="size-5" />}>
                {contact.phone.label}
              </ContactLink>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <Image
          src={img.logoWicWhite.src}
          width={img.logoWicWhite.width}
          height={img.logoWicWhite.height}
          alt="WIC Design"
          className="h-10 w-auto"
        />
        <p className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-white/60">
          Magia visual para un impacto real · © {new Date().getFullYear()} WIC Design
        </p>
      </Container>
    </footer>
  );
}
