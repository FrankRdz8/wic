import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 md:px-12 ${className}`}>{children}</div>
  );
}

/** Numeral de sección en contorno, decorativo. Hereda el color del texto. */
export function OutlineNumber({ n, className = "" }: { n: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`text-outline pointer-events-none select-none font-display leading-[0.8] ${className}`}
    >
      {n}
    </span>
  );
}

/** Botón en píldora, como los del portfolio en PDF. */
export function Pill({
  href,
  children,
  external = false,
  tone = "yellow",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  tone?: "yellow" | "ink";
}) {
  const colors =
    tone === "yellow"
      ? "bg-wic text-ink hover:bg-white"
      : "bg-ink text-white hover:bg-wic hover:text-ink";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3 font-heading text-[12px] font-extrabold uppercase tracking-[0.2em] transition-colors duration-300 ${colors}`}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

/** Etiqueta pequeña con número/categoría (fondo amarillo, legible sobre claro y oscuro). */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-wic px-2.5 py-1 font-heading text-[11px] font-extrabold uppercase tracking-[0.25em] text-ink">
      {children}
    </span>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
