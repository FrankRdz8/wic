import { marquee } from "@/lib/content";

/** Cinta infinita con los servicios. El contenido se duplica para que el bucle sea continuo. */
export default function Marquee() {
  const row = (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {marquee.map((item) => (
        <li
          key={item}
          className="flex items-center whitespace-nowrap px-6 font-display text-[clamp(1.75rem,4vw,3.25rem)] uppercase leading-none md:px-10"
        >
          {item}
          <span className="ml-6 text-wic md:ml-10">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-y border-white/15 bg-black py-5 text-white md:py-6">
      <p className="sr-only">{marquee.join(", ")}</p>
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
