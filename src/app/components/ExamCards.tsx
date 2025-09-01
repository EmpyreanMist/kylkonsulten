function Card({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
      <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExamCards() {
  return (
    <section id="exams" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Examinationer</h2>
        <p className="mt-2 text-gray-600">
          Kategori 1 och 2 för personer med goda tekniska kunskaper (t.ex.
          elektriker, VVS:are, eller praktisk erfarenhet av kylteknik).
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card
            title="Teoretisk examination"
            desc="Genomförs på plats i Luleå enligt Incerts riktlinjer."
            items={["Kategori 1", "Kategori 2", "Kategori V (vid omcert)"]}
          />
          <Card
            title="Praktisk examination"
            desc="Moment på utrustning med handledning av instruktör."
            items={[
              "Säkerhet och arbetsmoment",
              "Felsökning och mätning",
              "Löd-/kopplingsmoment vid behov",
            ]}
          />
          <Card
            title="Intyg & certifiering"
            desc="Efter godkänt prov hanteras underlag för certifiering."
            items={[
              "Dokumentation",
              "Återkoppling",
              "Vägledning till nästa steg",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
