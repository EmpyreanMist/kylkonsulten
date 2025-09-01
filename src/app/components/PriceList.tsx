type Row = { title: string; days?: string; price: string; note?: string };

const grund: Row[] = [
  {
    title: "Grundläggande kylteknikteori",
    days: "3 dagar",
    price: "12 000 kr + moms",
  },
  { title: "Kylteknik Praktisk", days: "3 dagar", price: "12 000 kr + moms" },
  {
    title: "Materialkunskap / Lödprov",
    days: "2 dagar",
    price: "3 500 kr + moms",
  },
];

const prep: Row[] = [
  {
    title: "Preparandkurs – teoretiskt (Kat 1 & 2)",
    days: "1 dag",
    price: "9 000 kr + moms",
  },
  {
    title: "Preparandkurs – praktiskt (Kat 1 & 2)",
    days: "—",
    price: "12 000 kr + moms",
  },
];

const omcert: Row[] = [
  {
    title: "Preparandkurs / lagar (Kat 1, 2 & V)",
    days: "1 dag",
    price: "9 000 kr + moms",
  },
];

function Table({ caption, rows }: { caption: string; rows: Row[] }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">{caption}</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {rows.map((r, i) => (
          <div
            key={i}
            className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-2"
          >
            <div className="font-medium">{r.title}</div>
            <div className="text-gray-600">{r.days ?? ""}</div>
            <div className="text-gray-900">{r.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PriceList() {
  return (
    <section id="prices" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Prislista</h2>
        <p className="mt-2 text-gray-600">
          Beroende på förkunskaper kan vi anpassa en utbildning som passar alla.
        </p>

        <div className="mt-8 grid gap-6">
          <Table caption="Grundutbildning (Kat 1 & 2)" rows={grund} />
          <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4">
            <span className="font-medium">Paketpris (summa):</span> 27&nbsp;500
            kr + moms
          </div>
          <Table
            caption="Preparandkurs (3 dagar) – mot prov Kat 1 & 2"
            rows={prep}
          />
          <Table
            caption="Preparandkurs för omcertifiering (2 dagar)"
            rows={omcert}
          />
        </div>
      </div>
    </section>
  );
}
