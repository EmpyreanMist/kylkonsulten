import Link from "next/link";

export default function SafetyCoursesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Säkerhetsutbildningar</h1>
        <p className="mt-2 text-gray-700">
          Här samlar vi våra utbildningar utanför kylområdet.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-lg font-medium">Heta Arbeten</h2>
          <p className="mt-2 text-gray-700">Certifikat enligt gällande krav.</p>
          <p className="mt-3 font-medium">Pris: 2 800 kr + moms</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-lg font-medium">Liftutbildning</h2>
          <p className="mt-2 text-gray-700">Säker hantering av liftar.</p>
          <p className="mt-3 font-medium">Pris: 2 200 kr + moms</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
          <h2 className="text-lg font-medium">Fallskydd</h2>
          <p className="mt-2 text-gray-700">Arbete på höjd med rätt skydd.</p>
          <p className="mt-3 font-medium">Pris: 1 500 kr + moms</p>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/#kontakt"
          className="inline-block rounded-2xl px-5 py-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 active:bg-blue-800"
        >
          Boka / Skicka förfrågan
        </Link>
      </div>
    </main>
  );
}
