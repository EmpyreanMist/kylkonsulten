"use client";

import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import {
  utbildningstillfallenQuery,
  type Utbildningstillfalle,
} from "../../sanity/lib/queries";

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Utbildningstillfalle[]>([]);

  useEffect(() => {
    client
      .fetch<Utbildningstillfalle[]>(utbildningstillfallenQuery)
      .then(setEvents);
  }, []);

  if (!events.length) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-16 text-center text-gray-100">
        <h2 className="text-3xl font-bold mb-6">Kommande utbildningar</h2>
        <p>Inga kommande utbildningstillfällen just nu.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Kommande utbildningar
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {events.map((event) => (
          <div
            key={event._id}
            className="rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-lg border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {event.title}
            </h3>
            <p className="text-gray-200 mb-4">{event.description}</p>
            <p className="text-gray-300">
              <span className="font-semibold">Datum:</span>{" "}
              {new Date(event.date).toLocaleDateString("sv-SE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Pris:</span> {event.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
