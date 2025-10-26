"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormMailTo() {
  const [form, setForm] = useState({
    namn: "",
    telefon: "",
    epost: "",
    arende: "Kylexamination",
    meddelande: "",
  });

  const subject = encodeURIComponent(
    `[${form.arende}] Förfrågan från ${form.namn}`
  );
  const body = encodeURIComponent(
    [
      `Namn: ${form.namn}`,
      `Telefon: ${form.telefon}`,
      `E-post: ${form.epost}`,
      `Ärende: ${form.arende}`,
      "",
      form.meddelande,
    ].join("\n")
  );

  const href = `mailto:kylkonsulteninorr@gmail.com?subject=${subject}&body=${body}`;

  const inputCls =
    "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder:text-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  const selectCls =
    "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-4 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-white"
      >
        Boka / Skicka förfrågan
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = href;
        }}
        className="mt-4 grid gap-4 sm:grid-cols-2"
      >
        <input
          className={inputCls}
          placeholder="Namn"
          value={form.namn}
          onChange={(e) => setForm({ ...form, namn: e.target.value })}
          required
          aria-label="Namn"
        />
        <input
          className={inputCls}
          placeholder="Telefon"
          value={form.telefon}
          onChange={(e) => setForm({ ...form, telefon: e.target.value })}
          aria-label="Telefon"
        />
        <input
          type="email"
          className={inputCls + " col-span-1"}
          placeholder="E-post"
          value={form.epost}
          onChange={(e) => setForm({ ...form, epost: e.target.value })}
          required
          aria-label="E-post"
        />

        <select
          className={selectCls}
          value={form.arende}
          onChange={(e) => setForm({ ...form, arende: e.target.value })}
          aria-label="Ärende"
        >
          <option>Kylexamination</option>
          <option>Preparandkurs</option>
          <option>Säkerhetsutbildningar – Heta Arbeten</option>
          <option>Säkerhetsutbildningar – Lift</option>
          <option>Säkerhetsutbildningar – Fallskydd</option>
          <option>Övrigt</option>
        </select>

        <textarea
          className={inputCls + " sm:col-span-2 min-h-[160px]"}
          placeholder="Beskriv ditt behov, önskat datum och antal personer."
          value={form.meddelande}
          onChange={(e) => setForm({ ...form, meddelande: e.target.value })}
          aria-label="Meddelande"
        />

        <div className="sm:col-span-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-2xl px-5 py-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Skicka
          </motion.button>
        </div>
      </motion.form>

      <p className="mt-3 text-sm text-gray-300">
        * Priser anges exkl. moms. Vi återkommer med bekräftelse och tider.
      </p>
    </section>
  );
}
