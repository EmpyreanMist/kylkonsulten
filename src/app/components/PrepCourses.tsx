"use client";
import { motion } from "framer-motion";

export default function PrepCourses() {
  return (
    <section id="preparand" className="mx-auto max-w-6xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-md text-white"
      >
        <h2 className="text-2xl font-semibold">
          Preparandkurser inför examination
        </h2>
        <p className="mt-2 text-gray-200">
          Vi erbjuder förberedande kurser i både teori och praktik så att du kan
          känna dig trygg inför provtillfället.
        </p>
      </motion.div>
    </section>
  );
}
