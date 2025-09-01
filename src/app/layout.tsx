import "./globals.css";
export const metadata = {
  title: "Kylakademin i Norr – Kylutbildningar & Examinationer",
  description:
    "Praktiska och teoretiska examinationer på uppdrag av Incert. Preparandkurser för Kat 1, Kat 2 och V. Midgårdsvägen 13, Luleå.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="bg-[#F8FAFC] text-gray-900 antialiased">{children}</body>
    </html>
  );
}
