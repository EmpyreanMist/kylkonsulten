"use client";
import { useState } from "react";
import { buildMailto } from "../lib/mailto";

export default function ContactFormMailto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Examination – Kat 1",
    message: "",
  });

  const interests = [
    "Examination – Kat 1",
    "Examination – Kat 2",
    "Preparandkurs – Teori (Kat 1 & 2)",
    "Preparandkurs – Praktik (Kat 1 & 2)",
    "Omcertifiering – Kat 1, 2 & V",
    "Övrigt",
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Bokningsförfrågan: ${form.interest}`;
    const body = [
      `Namn: ${form.name}`,
      `E-post: ${form.email}`,
      `Telefon: ${form.phone}`,
      `Intresse: ${form.interest}`,
      "",
      "Meddelande:",
      form.message || "-",
    ].join("\n");

    const url = buildMailto({ subject, body });
    window.location.href = url; // öppnar användarens mail-app
  }

  return (
    <section id="contact" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-gray-200 p-8 shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Bokningsförfrågan
          </h2>
          <p className="mt-2 text-gray-600">
            Skicka en förfrågan så återkommer vi. Formuläret öppnar din mailapp
            med alla uppgifter ifyllda.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid md:grid-cols-2 gap-4"
          >
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Namn</label>
              <input
                required
                className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="För- och efternamn"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">E-post</label>
              <input
                required
                type="email"
                className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="namn@exempel.se"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Telefon</label>
              <input
                className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="070-..."
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">
                Jag är intresserad av
              </label>
              <select
                className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
              >
                {interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Meddelande</label>
              <textarea
                rows={5}
                className="rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Berätta kort om förkunskaper och önskat datum."
              />
            </div>

            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                className="rounded-2xl bg-blue-600 text-white px-6 py-3 shadow-sm hover:shadow-md transition"
              >
                Skicka förfrågan
              </button>
              <a
                href="tel:+46704745102"
                className="rounded-2xl border border-gray-200 bg-white px-6 py-3 shadow-sm hover:shadow-md transition"
              >
                Ring oss
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
