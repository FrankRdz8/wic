import type { Metadata, Viewport } from "next";
import { Anton, Inter, Montserrat, Mrs_Saint_Delafield } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

// Extenda 60 Giga (la tipografía del PDF) no está en Google Fonts: Anton es la más cercana.
// Para usar la original, cargala con next/font/local y apuntá --font-anton a ella.
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const saintDelafield = Mrs_Saint_Delafield({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-saint-delafield",
});

export const metadata: Metadata = {
  title: "WIC Design — Portfolio",
  description:
    "Agencia de diseño gráfico y marketing digital. Identidad de marca, redes sociales, contenido, video y desarrollo web. Magia visual para un impacto real.",
};

export const viewport: Viewport = {
  themeColor: "#1d1d1d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} ${montserrat.variable} ${saintDelafield.variable}`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
