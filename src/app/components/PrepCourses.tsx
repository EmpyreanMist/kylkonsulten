export default function PrepCourses() {
  return (
    <section id="prep" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Preparandkurser</h2>
        <p className="mt-2 text-gray-600">
          Effektiv genomgång inför både teoretiska och praktiska prov. Fokus på
          det du behöver kunna.
        </p>
        <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Repetition av kärnkoncept inom kylteknik</li>
            <li>Genomgång av lagar och regler (Kat 1, 2 & V)</li>
            <li>Praktiska moment och tips inför prov</li>
            <li>Individuell anpassning efter förkunskaper</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
