import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A—R Studio | Diseño gráfico",
  description: "Portfolio de diseño gráfico, identidad visual, dirección de arte y diseño editorial.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
