import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dentinalis- Implantes Dentários em 72h",
  description:
    "Especialistas em Implantes Dentários. Tenha dentes fixos em 72h com a técnica All-On-4. Mais de 15 anos de experiência em Criciúma - SC.",
  generator: "Belmond",
  icons: {
    icon: "icone.jpeg", // aqui você indica o favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
