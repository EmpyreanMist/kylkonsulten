"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../sanity/client";

type Pris = {
  _id: string;
  kurs: string;
  pris: number;
  beskrivning: string;
  kategori?: string; // "Examination", "Grundutbildning", "Preparand"
};

export default function PriceList() {
  const [priser, setPriser] = useState<Pris[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "pris"]{_id, kurs, pris, beskrivning, kategori}`)
      .then((data) => setPriser(data));
  }, []);

  // Gruppera priserna per kategori
  const grupperadePriser = priser.reduce(
    (acc: Record<string, Pris[]>, item) => {
      const kategori = item.kategori || "Övrigt";
      if (!acc[kategori]) acc[kategori] = [];
      acc[kategori].push(item);
      return acc;
    },
    {}
  );

  const rubriker: Record<string, string> = {
    Examination: "Examinationsavgifter",
    Grundutbildning: "Grundutbildning (Kat I & II)",
    Preparand: "Preparandkurser",
    Säkerhetsutbildning: "Säkerhetsutbildningar",
    Övrigt: "Övriga kurser",
  };

  return (
    <section id="priser" className="mx-auto max-w-6xl px-4 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-white"
      >
        Priser (exkl. moms)
      </motion.h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {Object.entries(grupperadePriser).map(([kategori, lista], index) => (
          <motion.div
            key={kategori}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-md hover:bg-white/20 transition text-white"
          >
            <h3 className="text-lg font-medium">
              {rubriker[kategori] || kategori}
            </h3>
            <ul className="mt-3 space-y-1 text-gray-200">
              {lista.map((item) => (
                <li key={item._id}>
                  • {item.kurs} –{" "}
                  <strong>{item.pris.toLocaleString()} kr + moms</strong>
                  {item.beskrivning && (
                    <p className="text-sm text-gray-400">{item.beskrivning}</p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-4 text-sm text-gray-300"
      >
        * Examinationer genomförs på uppdrag av Incert. Tider och omfattning
        enligt överenskommelse.
      </motion.p>
    </section>
  );
}
