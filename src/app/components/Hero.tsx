"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 grid gap-6 sm:grid-cols-2 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-gray-900">
            Kylexaminationer Kat I–IV & Preparandkurser
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Praktiska och teoretiska examinationer på uppdrag av Incert. Vi
            erbjuder även tydliga preparandkurser inför prov.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#kontakt"
              className="rounded-2xl px-6 py-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 transition"
            >
              Boka / Skicka förfrågan
            </a>
            <a
              href="#examinationer"
              className="rounded-2xl px-6 py-3 border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition"
            >
              Läs mer
            </a>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 p-6 bg-white shadow-lg"
        >
          <ul className="space-y-2 text-gray-700">
            <li>• Kat I, Kat II, Kat III, Kat IV</li>
            <li>
              • Praktiskt prov: <strong>4100 kr + moms</strong>
            </li>
            <li>
              • Teoriprov: <strong>2500 kr + moms</strong>
            </li>
            <li>• Säkerhetsutbildningar: Heta Arbeten, Lift, Fallskydd</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
