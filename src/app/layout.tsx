import "./globals.css";
import Navbar from "./components/Navbar";
import DarkVeil from "./components/DarkVeil";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kylkonsulten i Norr AB – Kylexaminationer Kat I–IV & Preparandkurser",
  description:
    "Praktiska och teoretiska examinationer på uppdrag av Incert. Vi erbjuder även preparandkurser samt Heta Arbeten, Lift och Fallskydd.",
  icons: {
    icon: "/kylkonsulten.png",
    apple: "/kylkonsulten.png",
    shortcut: "/kylkonsulten.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen text-gray-900 antialiased pt-16 relative">
        <DarkVeil />

        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
