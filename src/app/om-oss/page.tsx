"use client";
import Image from "next/image";

export default function OmOssPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Titel */}
      <h1 className="mb-8 text-center text-4xl font-bold text-white drop-shadow-lg">
        Om oss
      </h1>

      {/* Introtext */}
      <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-100 drop-shadow-md">
        Vi på{" "}
        <span className="font-semibold text-white">Kylkonsulten i Norr AB</span>{" "}
        har lång erfarenhet av utbildningar och examinationer inom kyla,
        säkerhet och arbetsmiljö. Våra utbildare kombinerar praktisk erfarenhet
        med pedagogik för att ge deltagarna en trygg väg till certifiering.
      </p>

      {/* Utbildare */}
      <div className="grid gap-12 md:grid-cols-2">
        {/* Antero */}
        <div className="flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-lg border border-white/20">
          <div className="mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg border border-white/30">
            <Image
              src="/antero.jpg"
              alt="Antero Ala-Kojola"
              width={192}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-white">
            Antero Ala-Kojola
          </h2>
          <p className="mt-4 text-center text-gray-100">
            35 års branscherfarenhet. Utbildare inom kyla, heta arbeten, VVS,
            mobila plattformar och fallskydd. Certifierad kyl­examinator.
          </p>
        </div>

        {/* William */}
        <div className="flex flex-col items-center rounded-2xl bg-white/10 backdrop-blur-md p-8 shadow-lg border border-white/20">
          <div className="mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg border border-white/30">
            <Image
              src="/william.jpg"
              alt="William Stålnacke"
              width={192}
              height={192}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-white">
            William Stålnacke
          </h2>
          <p className="mt-4 text-center text-gray-100">
            10 års branscherfarenhet. Utbildare inom kyla, mobila plattformar
            och fallskydd. Certifierad kyl­examinator.
          </p>
        </div>
      </div>
    </main>
  );
}
