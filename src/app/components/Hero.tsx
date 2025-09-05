export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="grid gap-6 sm:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
            Kylexaminationer Kat I–IV & Preparandkurser
          </h1>
          <p className="mt-4 text-gray-700">
            Praktiska och teoretiska examinationer på uppdrag av Incert. Vi
            erbjuder även tydliga preparandkurser inför prov.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#kontakt"
              className="rounded-2xl px-5 py-3 bg-blue-600 text-white shadow-md"
            >
              Boka / Skicka förfrågan
            </a>
            <a
              href="#examinationer"
              className="rounded-2xl px-5 py-3 border border-gray-200"
            >
              Läs mer
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-md">
          <ul className="space-y-2">
            <li>• Kat I, Kat II, Kat III, Kat IV</li>
            <li>
              • Praktiskt prov: <strong>4100 kr + moms</strong>
            </li>
            <li>
              • Teoriprov: <strong>2500 kr + moms</strong>
            </li>
            <li>• Säkerhetsutbildningar: Heta Arbeten, Lift, Fallskydd</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
