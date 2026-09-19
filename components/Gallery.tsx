import Image from "next/image";
import type { CSSProperties } from "react";
import type { GalleryItem, GalleryRow } from "@/lib/content";

const bgClass = { black: "bg-black", ink: "bg-ink", white: "bg-white" } as const;

/**
 * Galería "justificada": cada fila reparte el ancho según la proporción de sus
 * imágenes, así todas quedan del mismo alto y ninguna se recorta.
 * En móvil las imágenes se apilan a ancho completo.
 */
export default function Gallery({
  rows,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  className = "",
}: {
  rows: GalleryRow[];
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {rows.map((row, i) => {
        const ratios = row.items.map((it) => it.ratio ?? it.img.width / it.img.height);
        const total = ratios.reduce((a, b) => a + b, 0);
        const style: CSSProperties & Record<string, string | number> = {};
        if (row.maxH) {
          style["--mw"] = `${Math.round(row.maxH * total) + (row.items.length - 1) * 12}px`;
        }
        return (
          <div
            key={i}
            style={style}
            className={`flex flex-col gap-3 md:flex-row md:items-start ${
              row.maxH ? "md:mx-auto md:w-full md:max-w-(--mw)" : ""
            }`}
          >
            {row.items.map((item, j) => (
              <Tile key={item.alt} item={item} ratio={ratios[j]} sizes={sizes} maxH={row.maxH} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function Tile({
  item,
  ratio,
  sizes,
  maxH,
}: {
  item: GalleryItem;
  ratio: number;
  sizes: string;
  maxH?: number;
}) {
  const style: CSSProperties & Record<string, string | number> = {
    "--r": ratio,
    aspectRatio: ratio,
  };
  // En móvil (apilado) el tope de alto también evita ampliar de más las imágenes verticales.
  if (maxH) style["--mxw"] = `${Math.round(maxH * ratio)}px`;
  return (
    <div
      style={style}
      className={`group relative mx-auto w-full overflow-hidden md:mx-0 md:w-auto md:flex-(--r) md:basis-0 ${
        maxH ? "max-w-(--mxw) md:max-w-none" : ""
      } ${item.bg ? bgClass[item.bg] : "bg-neutral-500/10"}`}
    >
      <Image
        src={item.img.src}
        width={item.img.width}
        height={item.img.height}
        alt={item.alt}
        sizes={sizes}
        className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
          item.pad ? "object-contain p-[14%]" : "object-cover"
        }`}
      />
    </div>
  );
}
