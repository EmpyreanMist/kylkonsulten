"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 grid gap-6 sm:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            Kylexaminationer Kat I–IV
          </h1>
          <p className="mt-4 text-gray-200 text-lg">
            Teoretiska och praktiska kylexaminationer på vårt av Incert godkända
            examinationscenter. Incert är ackrediterat organ för
            kylcertifieringar så själva certifikatet söks via:{" "}
            <a
              href="https://incert.se"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              incert.se
            </a>{" "}
            som även tillhandahåller information.
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
              className="rounded-2xl px-6 py-3 border border-white/30 text-white hover:border-blue-400 hover:text-blue-400 transition"
            >
              Läs mer
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-lg text-white"
        >
          <ul className="space-y-2">
            <li>• Kat I, Kat II, Kat III, Kat IV</li>
            <li>• Praktiskta, teoretiska och lödprov</li>
            <li>• Säkerhetsutbildningar: Heta Arbeten, Lift, Fallskydd</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
