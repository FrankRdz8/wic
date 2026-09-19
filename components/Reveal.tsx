"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Aparece deslizando hacia arriba cuando entra al viewport (una sola vez). */
export default function Reveal({ children, className, delay = 0, y = 36 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
