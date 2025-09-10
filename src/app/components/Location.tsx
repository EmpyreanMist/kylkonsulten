"use client";
import { motion } from "framer-motion";

export default function Location() {
  const mapsUrl =
    "https://www.google.com/maps/place/Midgårdsvägen+13,+973+34+Luleå";
  const embedSrc =
    "https://www.google.com/maps?q=Midgårdsvägen%2013,%20973%2034%20Luleå&output=embed";

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-white"
      >
        Här finns vi
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-3 text-gray-200"
      >
        <p className="font-medium">
          Kylakademin i Norr – Midgårdsvägen 13, 973 34 Luleå
        </p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Öppna i Google Maps
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md overflow-hidden"
      >
        <iframe
          title="Karta – Kylakademin i Norr"
          src={embedSrc}
          width="100%"
          height="380"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[380px]"
        />
      </motion.div>
    </section>
  );
}
