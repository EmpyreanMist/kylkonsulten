type Card = { title: string; text: string; anchor?: string };

const cards: Card[] = [
  { title: "Kat I", text: "Full behörighet. Praktiskt & teoretiskt prov." },
  { title: "Kat II", text: "Service/underhåll, viss begränsning i hantering." },
  { title: "Kat III", text: "Läckagekontroll m.m. enligt regelverket." },
  { title: "Kat IV", text: "Återvinning av köldmedium." },
];

export default function ExamCards() {
  return (
    <section id="examinationer" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Kylexaminationer Kat I–IV</h2>
      <p className="mt-2 text-gray-700">
        Vi examinerar praktiskt och teoretiskt. Behörighetsomfattning enligt
        gällande regelverk.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md"
          >
            <h3 className="text-lg font-medium">{c.title}</h3>
            <p className="mt-2 text-gray-700">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
