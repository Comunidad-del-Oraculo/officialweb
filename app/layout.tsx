import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://oraculocomunidad.com"),
  title: {
    default: "Comunidad del Oráculo",
    template: "%s | Oráculo",
  },
  description:
    "La Comunidad del Oráculo es un espacio conformado por desarrolladores con diversa experiencia, habilidades y áreas de especialización.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "http://oraculocomunidad.com",
    siteName: "Comunidad del Oráculo",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "http://oraculocomunidad.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col antialiased min-h-screen justify-center bg-zinc-50 font-sans dark:bg-black w-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
