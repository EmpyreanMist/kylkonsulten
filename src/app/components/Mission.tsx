"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-md hover:bg-white/20 transition text-white"
      >
        <h2 className="text-2xl font-semibold">Vårt uppdrag</h2>
        <p className="mt-3 text-gray-200">
          Som av Incert godkänt Examinationscenter utför vi praktiska och
          teoretiska examinationer, enligt gällande lagstiftning.
        </p>
        <p className="mt-2 text-gray-200">
          Dessutom tillhandahåller vi preparandkurser inför proven och
          säkerhetsutbildningar som Heta Arbeten, Höga lyft och fallskydd.
          Självklart även andra kylutbildningar såsom Co2 etc.
        </p>
      </motion.div>
    </section>
  );
}
