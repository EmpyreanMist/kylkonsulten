"use client";
import { motion } from "framer-motion";
import {
  defaultSiteContent,
  type SiteContent,
} from "@/sanity/lib/siteContent";

type MissionContent = SiteContent["mission"];

export default function Mission({
  content = defaultSiteContent.mission,
}: {
  content?: MissionContent;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-md hover:bg-white/20 transition text-white"
      >
        <h2 className="text-2xl font-semibold">{content.title}</h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? "mt-3 text-gray-200" : "mt-2 text-gray-200"}>
            {paragraph}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
