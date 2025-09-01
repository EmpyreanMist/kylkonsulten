import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-r from-white to-blue-50 p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Redo att boka?</h3>
            <p className="text-gray-600 mt-1">
              Säkra din plats för examination eller preparandkurs.
            </p>
          </div>
          <Link
            href="#contact"
            className="rounded-2xl bg-blue-600 text-white px-6 py-3 shadow-sm hover:shadow-md transition"
          >
            Skicka bokningsförfrågan
          </Link>
        </div>
      </div>
    </section>
  );
}
