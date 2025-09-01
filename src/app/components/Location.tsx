export default function Location() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold">Hitta hit</h2>
          <p className="mt-2 text-gray-700">
            Kylakademin i Norr – Midgårdsvägen 13, Luleå
          </p>
          <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200">
            {/* Byt till riktig karta vid behov. En ren frontend-iframe funkar fint: */}
            <iframe
              title="Karta"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=22.0%2C65.5%2C23.0%2C66.0&layer=mapnik"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
