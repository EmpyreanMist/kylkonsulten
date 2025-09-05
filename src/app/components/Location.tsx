export default function Location() {
  const mapsUrl =
    "https://www.google.com/maps/place/Midgårdsvägen+13,+973+34+Luleå";
  const embedSrc =
    "https://www.google.com/maps?q=Midgårdsvägen%2013,%20973%2034%20Luleå&output=embed";

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Här finns vi</h2>

      <div className="mt-3 text-gray-700">
        <p className="font-medium">
          Kylakademin i Norr – Midgårdsvägen 13, 973 34 Luleå
        </p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Öppna i Google Maps
        </a>
      </div>

      <div className="mt-4 rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
        <iframe
          title="Karta – Kylakademin i Norr"
          src={embedSrc}
          width="100%"
          height="380"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
