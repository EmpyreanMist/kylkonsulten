"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Start", href: "/" },
  { label: "Examinationer", href: "/#examinationer" },
  { label: "Preparandkurser", href: "/#preparand" },
  { label: "Priser", href: "/#priser" },
  { label: "Säkerhetsutbildningar", href: "/sakerhetsutbildningar" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = open ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-white">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/kylkonsulten.png"
              alt="Kylkonsulten i Norr AB"
              width={32}
              height={32}
              className="h-8 w-8 rounded"
              priority
            />
            <span className="font-semibold text-lg">
              Kylkonsulten i Norr AB
            </span>
          </Link>

          <ul className="hidden sm:flex items-center gap-5">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition hover:text-blue-400 ${
                    pathname === item.href ? "font-medium text-blue-400" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="sm:hidden grid place-items-center size-10 rounded-xl border border-white/30 hover:bg-white/10 text-white"
            onClick={() => setOpen(true)}
            aria-label="Öppna meny"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden>☰</span>
          </button>
        </nav>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex flex-col text-white">
            <div className="relative mx-auto max-w-6xl w-full px-4 h-16 flex items-center justify-center border-b border-white/20">
              <span className="font-semibold">Meny</span>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center size-11 rounded-2xl border border-white/30 shadow-sm hover:bg-white/10 active:scale-95"
                onClick={() => setOpen(false)}
                aria-label="Stäng meny"
                title="Stäng"
              >
                <span className="text-xl" aria-hidden>
                  ×
                </span>
              </button>
            </div>

            <ul className="mx-auto max-w-6xl w-full px-4 py-4 space-y-1 overflow-y-auto">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-4 text-[17px] leading-none tracking-tight transition ${
                      pathname === item.href
                        ? "bg-white/20 font-medium text-blue-400"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <div className="mx-2 border-b border-white/20" />
                </li>
              ))}
            </ul>

            <div className="mt-auto mx-auto max-w-6xl w-full px-4 pb-6 pt-2">
              <Link
                href="/#kontakt"
                onClick={() => setOpen(false)}
                className="block text-center rounded-2xl px-5 py-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 active:bg-blue-800"
              >
                Boka / Skicka förfrågan
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
