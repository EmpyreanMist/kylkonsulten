"use client";
import { motion } from "framer-motion";
import {
  defaultSiteContent,
  type SiteContent,
} from "@/sanity/lib/siteContent";

type ExamCardsContent = SiteContent["exams"];

export default function ExamCards({
  content = defaultSiteContent.exams,
}: {
  content?: ExamCardsContent;
}) {
  return (
    <section id="examinationer" className="mx-auto max-w-6xl px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-white"
      >
        {content.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-2 text-gray-200"
      >
        {content.intro}
      </motion.p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {content.cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-md 
                       hover:bg-white/20 hover:-translate-y-1 
                       transition-all duration-300 text-white"
          >
            <h3 className="text-lg font-medium">{c.title}</h3>
            <p className="mt-2 text-gray-200">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
