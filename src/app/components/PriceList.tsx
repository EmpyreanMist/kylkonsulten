"use client";
import { motion } from "framer-motion";

export default function PriceList() {
  return (
    <section id="priser" className="mx-auto max-w-6xl px-4 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold"
      >
        Priser (exkl. moms)
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition"
      >
        <h3 className="text-lg font-medium">Examinationsavgifter</h3>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>
            • Praktiskt prov: <strong>4100 kr + moms</strong>
          </li>
          <li>
            • Teoriprov: <strong>2500 kr + moms</strong>
          </li>
        </ul>
      </motion.div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition"
        >
          <h3 className="text-lg font-medium">Grundutbildning (Kat I & II)</h3>
          <ul className="mt-3 space-y-1 text-gray-700">
            <li>• Kylteknikteori 3 dagar – 12 000 kr + moms</li>
            <li>• Kylteknik praktik 3 dagar – 12 000 kr + moms</li>
            <li>• Materialkunskap/lödprov 2 dagar – 3 500 kr + moms</li>
            <li className="mt-1">
              Summa: <strong>27 500 kr + moms</strong>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg hover:border-blue-500 transition"
        >
          <h3 className="text-lg font-medium">Preparandkurser</h3>
          <ul className="mt-3 space-y-1 text-gray-700">
            <li>• Teoretisk preparand (1 dag) – 9 000 kr + moms</li>
            <li>• Praktisk preparand – 12 000 kr + moms</li>
            <li>• Omcert/lagar (1 dag) – 9 000 kr + moms</li>
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-4 text-sm text-gray-600"
      >
        * Examinationer genomförs på uppdrag av Incert. Tider och omfattning
        enligt överenskommelse.
      </motion.p>
    </section>
  );
}
