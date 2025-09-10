"use client";
import { motion } from "framer-motion";

type Card = { title: string; text: string; anchor?: string };

const cards: Card[] = [
  { title: "Kat I", text: "Full behörighet. Praktiskt & teoretiskt prov." },
  { title: "Kat II", text: "Service/underhåll, viss begränsning i hantering." },
  { title: "Kat III", text: "Läckagekontroll m.m. enligt regelverket." },
  { title: "Kat IV", text: "Återvinning av köldmedium." },
];

export default function ExamCards() {
  return (
    <section id="examinationer" className="mx-auto max-w-6xl px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Kylexaminationer Kat I–IV
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-2 text-gray-700"
      >
        Vi examinerar praktiskt och teoretiskt. Behörighetsomfattning enligt
        gällande regelverk.
      </motion.p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md 
                       hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 
                       transition-all duration-300"
          >
            <h3 className="text-lg font-medium text-gray-900">{c.title}</h3>
            <p className="mt-2 text-gray-700">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
