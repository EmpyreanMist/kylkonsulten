"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="#hero" className="flex items-center gap-3">
            <Image
              src="/kylkonsulten.png"
              alt="Kylakademin i Norr"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-semibold">Kylakademin i Norr</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#mission" className="hover:text-blue-600">
              Uppdrag
            </a>
            <a href="#exams" className="hover:text-blue-600">
              Examination
            </a>
            <a href="#prices" className="hover:text-blue-600">
              Prislista
            </a>
            <a href="#prep" className="hover:text-blue-600">
              Preparand
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Kontakt
            </a>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 px-3 py-2"
          >
            Meny
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            <a href="#mission" onClick={() => setOpen(false)}>
              Uppdrag
            </a>
            <a href="#exams" onClick={() => setOpen(false)}>
              Examination
            </a>
            <a href="#prices" onClick={() => setOpen(false)}>
              Prislista
            </a>
            <a href="#prep" onClick={() => setOpen(false)}>
              Preparand
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Kontakt
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
