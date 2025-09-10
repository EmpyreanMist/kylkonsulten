"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QA({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm cursor-pointer select-none"
    >
      <h4 className="font-semibold flex justify-between items-center">
        {q}
        <span className="text-blue-600">{open ? "−" : "+"}</span>
      </h4>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-700 mt-2"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Vanliga frågor</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <QA
            q="Behöver jag tidigare erfarenhet?"
            a="Vi rekommenderar god teknisk bakgrund (t.ex. elektriker, VVS eller praktisk kylteknik). Vi anpassar upplägget efter dina förkunskaper."
          />
          <QA
            q="Var sker utbildningen?"
            a="På plats i Luleå, Midgårdsvägen 13."
          />
          <QA
            q="Kan ni hjälpa mig välja rätt kurs?"
            a="Ja – skriv dina mål i bokningsförfrågan så guidar vi dig."
          />
          <QA
            q="Får jag intyg?"
            a="Ja, efter godkända moment och prov får du underlag för certifiering."
          />
        </div>
      </div>
    </section>
  );
}
