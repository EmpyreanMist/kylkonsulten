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
          Vi genomför <strong>praktiska och teoretiska examinationer</strong>{" "}
          för kylcertifiering (Kat I–IV) <strong>på uppdrag av Incert</strong>.
          Vi håller även <strong>preparandkurser</strong> som förbereder dig
          inför provet – både teori och praktik.
        </p>
        <p className="mt-2 text-gray-200">
          Dessutom erbjuder vi separata <strong>Säkerhetsutbildningar</strong>:
          Heta Arbeten, Liftutbildning och Fallskydd.
        </p>
      </motion.div>
    </section>
  );
}
