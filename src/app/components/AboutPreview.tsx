"use client";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Om oss</h2>
      <p className="text-gray-200 mb-6">
        Vi på{" "}
        <span className="font-semibold text-white">
          Kylkonsulten i Norr AB{" "}
        </span>
        är specialiserade på kylutbildningar och examinationer på uppdrag av
        Incert. Våra utbildare har lång erfarenhet inom kyla, VVS och säkerhet
        och brinner för att skapa en trygg och professionell miljö för
        deltagarna.
      </p>
      <Link
        href="/om-oss"
        className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md hover:bg-blue-700 active:bg-blue-800 transition"
      >
        Läs mer om oss
      </Link>
    </section>
  );
}
