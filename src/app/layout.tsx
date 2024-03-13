import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import favi from "../app/favicon.svg"

const inter = Poppins({ subsets: ["latin"], weight:["400","500","600","700"] });

export const metadata: Metadata = {
  title: "UX Group",
  description: "Tecnologia, Logística e Sustentabilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
