"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import { client } from "../../sanity/client";
import { omOssQuery, type OmOssData } from "../../sanity/lib/queries";

export default function OmOssPage() {
  const [data, setData] = useState<OmOssData | null>(null);

  useEffect(() => {
    client.fetch<OmOssData>(omOssQuery).then(setData);
  }, []);

  if (!data) {
    return <p className="text-white text-center">Laddar...</p>;
  }

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-16">
        {/* Titel */}
        <h1 className="mb-8 text-center text-4xl font-bold text-white drop-shadow-lg">
          {data.title}
        </h1>

        {/* Introtext */}
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-100 drop-shadow-md">
          {data.intro}
        </p>

        {/* Utbildare */}
        <div className="grid gap-12 md:grid-cols-2">
          {data.utbildare?.map((person, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-lg border border-white/20"
            >
              <div className="mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg border border-white/30">
                <Image
                  src={person.bildUrl}
                  alt={person.namn}
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                {person.namn}
              </h2>
              <p className="mt-4 text-center text-gray-100">
                {person.beskrivning}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
