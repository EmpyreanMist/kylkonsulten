import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Kylutbildningar & Examinationer{" "}
            <span className="text-blue-600">i Luleå</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Praktiska och teoretiska examinationer på uppdrag av Incert.
            Preparandkurser för Kat&nbsp;1, Kat&nbsp;2 och V.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="#prices"
              className="rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm hover:shadow-md transition"
            >
              Se prislista
            </Link>
            <Link
              href="#contact"
              className="rounded-2xl bg-blue-600 text-white px-5 py-3 shadow-sm hover:shadow-md transition"
            >
              Boka tid
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-gray-200 p-6 shadow-md">
          <ul className="space-y-3">
            <li>
              <span className="font-semibold">Adress:</span> Midgårdsvägen 13,
              Luleå
            </li>
            <li>
              <span className="font-semibold">Telefon:</span> 070-474 51 02
            </li>
            <li>
              <span className="font-semibold">E-post:</span>{" "}
              <a
                href="mailto:kylakademininorr@gmail.com"
                className="text-blue-600 underline"
              >
                kylakademininorr@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Instruktörer:</span> Antero
              Ala-Kojola, William Stålnacke
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
