"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200 bg-gradient-to-r from-white to-blue-50 p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Redo att boka?</h3>
            <p className="text-gray-600 mt-1">
              Säkra din plats för examination eller preparandkurs.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="rounded-2xl bg-blue-600 text-white px-6 py-3 shadow-sm hover:shadow-md transition"
            >
              Skicka bokningsförfrågan
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
